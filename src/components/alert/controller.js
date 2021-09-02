const { list, listByDate } = require("./store");
const moment = require('moment');
const { sendEmail, transporterEmail } = require("../email/controller");

const getAlerts = async(userId) => {
    const alerts = await list(userId);
    if (!alerts) throw new Error('Alerts not found');
    return alerts;
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
    getAlerts,
    getAlertsByDate,
    sendAlerts
}