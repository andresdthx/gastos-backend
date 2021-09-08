const { validatePassword, generateToken } = require("../../services/user");
const { listOne, addUser, addSubscribe, listSubscribes } = require("./store");
const webpush = require('../../utils/webpush');


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

const createSubscribe = async (data) => {
    const { suscription, userId } = data;
    const subsCreated = await addSubscribe(userId, suscription);
    if (!subsCreated) throw new Error('Error created subscribe');

    return subsCreated;
}

const getSubscribes = async() => {
    const subscribes = await listSubscribes();
    if(!subscribes) throw new Error('Error getting subscribes');

    return subscribes;
}

const sendNotification = async (subscribes, contentMessage) => {
    const { title, message } = contentMessage;

    const payload = JSON.stringify({
        title: title,
        message: message
    });
    await webpush.sendNotification(subscribes[0].subscribe, payload);
    await webpush.sendNotification(subscribes[1].subscribe, payload);
    // subscribes.map(item => await webpush.sendNotification(item.subscribe, payload));
}

module.exports = {
    signin,
    registerUser,
    createSubscribe,
    getSubscribes,
    sendNotification
}