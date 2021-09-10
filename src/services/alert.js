const validateDelete = (deleted) => {
    var message = { deleted: 0 };
    if(deleted) message = { deleted: 1 };
    return message
}

module.exports = {
    validateDelete
}