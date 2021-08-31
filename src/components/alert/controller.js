const { list } = require("./store");

const getAlerts = async(userId) => {
    const alerts = await list(userId);
    if (!alerts) throw new Error('Alerts not found');
    return alerts;
}

module.exports = {
    getAlerts
}