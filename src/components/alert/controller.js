const { list, listByDate, listOne, update } = require("./store");
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
const updateAlert = async (alert, active) => {
    const alertUpdated = await update(alert, active);
    if (!alertUpdated) throw new Error('Error updated alert');
    return alertUpdated;
}
const getDate = () => {
    const today = moment().format().split('T');
    return today;
}

const getAlertsByDate = async () => {
    const date = getDate()[0];
    const alerts = await listByDate(date);
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

module.exports = {
    getAlert,
    getAlerts,
    getAlertsByDate,
    updateAlert,
    sendAlerts
}