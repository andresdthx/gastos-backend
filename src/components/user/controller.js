const { validatePassword, generateToken } = require("../../services/user");
const { listOne, addUser } = require("./store");


const signin = async (userData) => {
    const { username, password } = userData;
    const user = await listOne(username);

    if(!user) throw new Error('Datos incorrectos');
    if (!validatePassword(password, user.password)) throw new Error('Datos incorrectos');

    const signinUser = loginUser(user);
    return signinUser;
}

const loginUser = (user) => {

    const signinUser = {
        id: user.userId,
        username: user.username,
        email: user.email,
        token: generateToken(user)
    }

    return signinUser;
}

const registerUser = async(userData) => {
    const {username, email } = userData;
    const user = await listOne(username, email);

    if (user) throw new ({message: 'El usuario ya existe', status: 404});

    const createUser = await addUser(userData);
    
    const signinUser = loginUser(createUser);
    return signinUser;
}

module.exports = {
    signin,
    registerUser
}