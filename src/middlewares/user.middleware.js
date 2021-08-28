const { encryptPassword } = require('../services/user');

const encryptPasswordValidate = (req, res, next) => {
    const { password } = req.body;

    if (password) {
        req.encryptPass = encryptPassword(password);
    }

    next();
}

module.exports = {
    encryptPasswordValidate
}