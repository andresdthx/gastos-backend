const { listByUser, addActivity } = require("./store");

const getActivities = async(userId) => {
    const activities = await listByUser(userId);
    if (!activities) throw new Error('Activities not found');
    return activities;
}

const createActivity = async (data) => {
    const { activity, date, userId } = data;
    const createdActivity = await addActivity( activity, date, userId );
    if(!createdActivity) throw new Error('Error creating activity');
    return createdActivity;
}

module.exports = {
    getActivities,
    createActivity
}