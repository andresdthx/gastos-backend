const { Activity, TypeAlert } = require('../../db/connection');

const getActivities = async (userUserId) => {
    const activities = await Activity.findAll({
        where: { userUserId: userUserId},
        include: [TypeAlert]
    });
    return activities;
}

const createActivity = async(data) => {
    const createdActivity = await Activity.create({data});
    return createdActivity;
}

module.exports = {
    listByUser: getActivities,
    addActivity: createActivity
}