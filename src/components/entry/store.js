const { Entry } = require("../../db/connection")

const createEntry = async (objEntry) => {
    const entry = await Entry.create(objEntry)
    return entry
}

const getEntry = async (userUserId) => {
    const entries = await Entry.findAll({
        where: {
            userUserId: userUserId
        }
    })

    return entries;
}

module.exports = {
    list: getEntry,
    add: createEntry
}