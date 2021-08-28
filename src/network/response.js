const errors = (req, res, message, status = 500, details) => {
    res.status(status).send(message);
}

const success = (req, res, message, status = 200) => {
    res.status(status).send(message);
}

module.exports = {
    success,
    errors
}