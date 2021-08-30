const userRouter = require('express').Router();
const { encryptPasswordValidate } = require('../../middlewares/user.middleware');
// const { register } = require('../../../../frontend/src/actions/userActions');
const { success, errors } = require('../../network/response');
const { generateToken, validatePassword } = require('../../services/user');
const { signin, registerUser } = require('./controller');

userRouter.post('/signin', async(req, res) => {
    try {
        const user = await signin(req.body);
        res.status(500).send(validatePassword(req.body.password, user.password));
        // if(!validatePassword(req.body.password, user.password)) throw new Error('datos incorrectos');
        // if(!validatePassword(req.body.password, user.password)){
        //     res.status(500).send('no son')
        // } else {
        //     res.status(500).send('si son')
        // };
        // res.send(user);

        const signinUser = {
            id: user.userId,
            username: user.username,
            email: user.email,
            token: generateToken(user)
        }
        success(req, res, signinUser);
    } catch (error) {
        errors(req, res, error);
    }

});

userRouter.post('/register', encryptPasswordValidate, async(req, res) => {
    try {
        const user = await registerUser({...req.body, password: req.encryptPass});
        
        const responseUser = {
            id: user.userId,
            username: user.username,
            email: user.email,
            token: generateToken(user)
        }
        success(req,res, responseUser);
    } catch (error) {
        res.send(error);
        errors(req, res, error);
    }
})

module.exports = userRouter;