const { encryptPasswordValidate } = require('../../middlewares/user.middleware');
const { success, errors } = require('../../network/response');
const { signin, registerUser, createSubscribe, getSubscribes, sendNotification } = require('./controller');
const userRouter = require('express').Router();
const webpush = require('../../utils/webpush');

userRouter.post('/signin', async(req, res) => {
    try {
        const user = await signin(req.body);
        success(req, res, user);
    } catch (error) {
        errors(req, res, error.message);
    }

});

userRouter.post('/register', encryptPasswordValidate, async(req, res) => {
    try {
        const user = await registerUser({...req.body, password: req.encryptPass});
        success(req,res, user);
    } catch (error) {
        res.send(error);
        errors(req, res, error);
    }
});

userRouter.post('/suscription', async (req, res) => {
    
    try {
        const userSubscribe = await createSubscribe(req.body);
        success(req, res, userSubscribe);
    } catch (error) {
        errors(req, res, error.message);
    }
});

userRouter.post('/new-notification', async(req, res) => {
    try {
       const subscribes = await getSubscribes();
       await sendNotification(subscribes, req.body);
       success(req, res, "notificaciones enviadas");
    } catch (error) {
        errors(req, res, error.message);
    }
});

module.exports = userRouter;