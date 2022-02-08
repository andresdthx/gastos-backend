
const { add, list, listOne, update } = require("./store")

const createNextExpense = async (objExpense) => {
    const nextExpense = await add(objExpense)
    if (!nextExpense) throw new Error('Error occurred next expense')
    return nextExpense
}

const getNextExpenses = async (entryId) => {
    const nextExpenses = await list(entryId)
    if (!nextExpenses) throw new Error('Error occurred next expenses')
    return nextExpenses
}

const getNextExpense = async (nextExpenseId) => {
    const nextExpense = await listOne(nextExpenseId)
    if (!nextExpense) throw new Error('Error get next expense')
    return nextExpense
}

const updateNextExpense = async (nextExpense, check) => {
    const nextExpenseUpdated = await update(nextExpense, check)
    if (!nextExpenseUpdated) throw new Error('Error updated next expense')
    return nextExpenseUpdated
}

module.exports = {
    createNextExpense,
    getNextExpenses,
    getNextExpense,
    updateNextExpense,
}