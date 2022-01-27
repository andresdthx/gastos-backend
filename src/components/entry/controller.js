const { add, list } = require("./store")

const createEntry = async (objEntry) => {
    const entry = await add(objEntry)
    if (!entry) throw new Error('Error creating entry')
    return entry;
}

const getEntries = async (userId) => {
    const entries = await list(userId);
    if (!entries) throw new Error('Error getting entries');
    return entries
}

module.exports = {
    createEntry,
    getEntries
}