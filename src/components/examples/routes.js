const userRouter = require('express').Router();
const { success, errors } = require('../../network/response');
const { validatePayment, getPayments } = require('./controller');

userRouter.post('/signin', async(req, res) => {
    res.send(req.body);
});

module.exports = userRouter;