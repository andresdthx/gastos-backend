const { Alert, User } = require('../../db/connection');
const { Op } = require('sequelize');

const getAlerts = async (userUserId) => {
    const alerts = await Alert.findAll({
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

module.exports = {
    list: getAlerts,
    listByDate: getAlertsByAlert
}