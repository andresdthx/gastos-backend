const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const encryptPassword = (password) => {
    const encrypt = bcrypt.hashSync(password, 4);
    return encrypt;
}

const generateToken = (user) => {
    return jwt.sign(
        {
            username: user.username,
            email: user.name,
        },
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d',
        }
    );
}

const validatePassword = (bodyPassword, userPassword) => {
    if (bcrypt.compareSync(bodyPassword, userPassword)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    encryptPassword,
    generateToken,
    validatePassword
}