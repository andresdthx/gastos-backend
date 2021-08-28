const { listOne, addUser } = require("./store")

const signin = async (signin) => {
    const { username } = signin;
    const user = await listOne(username);
    if(!user) throw new Error('Datos incorrectos');

    return user;
}

const registerUser = async(userData) => {
    const {username, email } = userData;
    const user = await listOne(username, email);

    if (user) throw new ({message: 'El usuario ya existe', status: 404});

    const createUser = await addUser(userData);
    return createUser;
}

module.exports = {
    signin,
    registerUser
}