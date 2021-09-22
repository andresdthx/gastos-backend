const CronJob = require('cron').CronJob;
const { success, errors } = require('../../network/response');
const { sendNotification } = require('../user/controller');
const { getAlerts, getAlert, updateAlert, createAlert, getAlertsByDate, getTypeAlerts, deleteAlert } = require('./controller');

const alertRouter = require('express').Router();

alertRouter.get('/:id', async(req, res)=> {
    try {
        const alerts = await getAlerts(req.params.id);
        success(req, res, alerts);
    } catch (error) {
        errors(req, res, error.message);
    }
});

alertRouter.put('/', async (req, res) => {
    try {
        const alert = await getAlert(req.body.id);
        const alertUpdated = await updateAlert(alert, req.body);
        success(req, res, alertUpdated);
    } catch (error) {
        errors(req, res, error.message);
    }
});

alertRouter.post('/', async(req, res) => {
    try {
        const alert = await createAlert(req.body);
        success(req, res, alert);
    } catch (error) {
        errors(req, res, error.message);
    }
});

alertRouter.post('/send', async(req, res) => {
    try {
        const alerts = await getAlertsByDate();
        await sendNotification(alerts);
        success(req, res, alerts);
    } catch (error) {
        errors(req, res, error.message);
    }
});

alertRouter.post('/types', async (req, res) => {
    try {
        const typeAlerts = await getTypeAlerts();
        success(req, res, typeAlerts);
    } catch (error) {
        errors(req, res, error.message);
    }
});

alertRouter.delete('/:id', async(req, res) => {
    try {
        const deleted = await deleteAlert(req.params.id);
        success(req, res, deleted)
    } catch (error) {
        errors(req, res, error.message);
    }
});

const job = new CronJob('00 10 * * *', async() => {
    try {
            const alerts = await getAlertsByDate();
            await sendNotification(alerts);
            success(req, res, alerts);
        } catch (error) {
            errors(req, res, error.message);
    }
}, null, true, 'America/Bogota');
job.start();

const job = new CronJob('00 15 * * *', async() => {
    try {
            const alerts = await getAlertsByDate();
            await sendNotification(alerts);
            success(req, res, alerts);
        } catch (error) {
            errors(req, res, error.message);
    }
}, null, true, 'America/Bogota');
job.start();


module.exports = alertRouter;