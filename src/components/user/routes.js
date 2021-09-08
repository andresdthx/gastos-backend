const { encryptPasswordValidate } = require('../../middlewares/user.middleware');
const { success, errors } = require('../../network/response');
const { signin, registerUser, createSubscribe } = require('./controller');
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

    // res.status(200).json();

    // const payload = JSON.stringify({
    //     title: 'My custom notification',
    //     message: 'Hello word'
    // });

    // try {
    //     await webpush.sendNotification(pushSuscription, payload);
    // } catch (error) {
    //     console.log(error);
    // }
})

module.exports = userRouter;