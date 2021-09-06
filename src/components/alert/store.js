const { Alert, User } = require('../../db/connection');
const { Op } = require('sequelize');

const getAlerts = async (userUserId) => {
    const alerts = await Alert.findAll({
        attributes: ['alertId', 'alert', 'message', 'date', 'active'],
        where: {
            userUserId: userUserId
        }
    });
    return alerts;
}

const getAlertsByAlert = async (date) => {
    const alerts = await Alert.findAll({
        where: {
            date: {
                [Op.substring] : date
            }
        },
        include: [User]
    });
    return alerts;
}
const getAlert = async (alertId) => {
    const alert = await Alert.findOne({
        where: { alertId: alertId }
    });
    return alert;
}

const updateActive = async (objAlert, alert, message, date, active) => {
    objAlert.alert = alert;
    objAlert.message = message;
    objAlert.date = date;
    objAlert.active = active;
    const alertUpdated = await objAlert.save();
    return alertUpdated;
}

const createAlert = async(alert, message, date, userUserId) => {
    const alertCreated = await Alert.create({
        alert: alert,
        message: message,
        date: date,
        userUserId: userUserId,
        active: true
    });
    return alertCreated;
}

module.exports = {
    listOne: getAlert,
    update: updateActive,
    list: getAlerts,
    listByDate: getAlertsByAlert,
    addAlert: createAlert
}