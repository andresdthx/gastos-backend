const { success, errors } = require('../../network/response');
const { getAlerts } = require('./controller');

const alertRouter = require('express').Router();

alertRouter.get('/:id', async(req, res)=> {
    try {
        const alerts = await getAlerts(req.params.id);
        success(req, res, alerts);
    } catch (error) {
        errors(req, res, error.message);
    }
});

module.exports = alertRouter;