const { Alert, User, Subscribe, TypeAlert } = require('../../db/connection');
const { Op } = require('sequelize');

const getAlerts = async (userUserId) => {
    const alerts = await Alert.findAll({
        attributes: ['alertId', 'message', 'date', 'active'],
        where: {
            userUserId: userUserId
        },
        include:[TypeAlert]
    });
    return alerts;
}

const getAlertsByDate = async (date) => {
    const alerts = await Alert.findAll({
        attributes: ['message'],
        where: {
            date: date,
            active: true
        },
        include: [
            {
                model: TypeAlert,
                attributes: ['title']
            },
            {
                model: User,
                attributes: ['userId', 'username', 'email'],
                include: [{
                    model: Subscribe,
                    attributes: ['subscribe']
                }]
            }
        ]
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

const createAlert = async(typesalertTypeAlertId, message, date, userUserId) => {
    const alertCreated = await Alert.create({
        date: date,
        active: true,
        message: message,
        userUserId: userUserId,
        typesalertTypeAlertId: typesalertTypeAlertId,
    });
    return alertCreated;
}

const getTypeAlerts = async() => {
    const typeAlerts = await TypeAlert.findAll({
        attributes: [['typeAlertId', 'value'], ['typeAlert', 'label']],
    });
    return typeAlerts;
}

const deleteAlert = (alertId) => {
    const deleted = Alert.destroy({
        where: {
            alertId: alertId
        }
    })
    .then((rowDeleted) => { 
        return { deleted: rowDeleted }
    });

    return deleted;
}

module.exports = {
    listOne: getAlert,
    update: updateActive,
    list: getAlerts,
    listByDate: getAlertsByDate,
    addAlert: createAlert,
    listTypes: getTypeAlerts,
    remove: deleteAlert
}