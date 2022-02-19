const { Sequelize, Op } = require('sequelize');
const { Activity, TypeAlert, sequelize } = require('../../db/connection');

const getActivities = async (userUserId) => {
    const activities = await Activity.findAll({
        attributes: [
            'activity',
            'activityId',
        // [Sequelize.literal(`DATE("date")`), 'date'],
        // [Sequelize.literal(`COUNT(*)`), 'count']
        [sequelize.fn('DATE', sequelize.col('date')), 'Date']
        ],
        group: [sequelize.fn('DATE', sequelize.col('date')), 'Date']
        // group: ['date'],
        // where: { userUserId: userUserId },
        // include: [TypeAlert]
    });
    return activities;
}

const createActivity = async (data) => {
    const createdActivity = await Activity.create({ data });
    return createdActivity;
}

module.exports = {
    listByUser: getActivities,
    addActivity: createActivity
}