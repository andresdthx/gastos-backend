const { success, errors } = require('../../network/response');
const { getActivities, createActivity } = require('./controller');

const activityRouter = require('express').Router();

activityRouter.get('/:id', async (req, res) => {
    try {
        const activities = await getActivities(req.params.id);
        success(req, res, activities);
    } catch (error) {
        errors(req, res, error.message);
    }
});

activityRouter.post('/', async(req, res) => {
    try {
        const createdActivity = await createActivity(req.body);
        success(req, res, createdActivity);
    } catch (error) {
        errors(req, res, error.message);
    }
});

module.exports = activityRouter;