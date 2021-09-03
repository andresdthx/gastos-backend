const { success, errors } = require('../../network/response');
const { getAlerts, getAlert, updateAlert } = require('./controller');

const alertRouter = require('express').Router();

alertRouter.get('/:id', async(req, res)=> {
    try {
        const alerts = await getAlerts(req.params.id);
        success(req, res, alerts);
    } catch (error) {
        errors(req, res, error.message);
    }
});

alertRouter.put('/:id', async (req, res) => {
    try {
        const alert = await getAlert(req.params.id);
        const alertUpdated = await updateAlert(alert, req.body.active);
        success(req, res, alertUpdated);
    } catch (error) {
        errors(req, res, error.message);
    }
});

module.exports = alertRouter;