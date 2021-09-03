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

const updateActive = async (alert, active) => {
    alert.active = active;
    const alertUpdated = await alert.save();
    return alertUpdated;
}

module.exports = {
    listOne: getAlert,
    update: updateActive,
    list: getAlerts,
    listByDate: getAlertsByAlert
}