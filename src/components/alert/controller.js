const { list, listByDate, listOne, update, addAlert } = require("./store");
const moment = require('moment');
const { sendEmail, transporterEmail } = require("../email/controller");

const getAlerts = async(userId) => {
    const alerts = await list(userId);
    if (!alerts) throw new Error('Alerts not found');
    return alerts;
}

const getAlert = async (alertId) => {
    const alert = await listOne(alertId);
    if (!alert) throw new Error('Error get alert');
    return alert;
}
const updateAlert = async (objAlert, alertData) => {
    const { alert, message, date, active } = alertData;
    const alertUpdated = await update(objAlert, alert, message, date, active);
    if (!alertUpdated) throw new Error('Error updated alert');
    return alertUpdated;
}
const getDate = () => {
    const date = moment().tz("America/Bogota").format().split('T');
    return date;
}

const getAlertsByDate = async () => {
    const date = getDate()[0];
    const today = date.split('-')[2];
    const day = Number(today);

    const alerts = await listByDate(day);
    if (!alerts) throw new Error('Error get alerts');
    return alerts;
}

const sendAlerts = async () => {
    const transporter = transporterEmail();
    const alerts = await getAlertsByDate();
    alerts.map(item => {
        sendEmail(transporter, item.user.email, item.alert, item.message);
    });
}

const createAlert = async (data) => {
    const { alert, message, date } = data.alert;
    const { userId } = data;
    const alertCreated = await addAlert(alert, message, date, userId);
    if (!alertCreated) throw new Error('Error create alert');
    return alertCreated;
}

module.exports = {
    getAlert,
    getAlerts,
    getAlertsByDate,
    updateAlert,
    sendAlerts,
    createAlert
}