const { Alert } = require('../../db/connection');

const getAlerts = async (userUserId) => {
    const alerts = await Alert.findAll({
        where: {
            userUserId: userUserId
        }
    });
    return alerts;
}

module.exports = {
    list: getAlerts
}