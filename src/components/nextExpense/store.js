const { NextExpense } = require("../../db/connection")

const createNextExpense = async (objExpense) => {
    const nextExpense = await NextExpense.create(objExpense)
    return nextExpense
}

const getNextExpenses = async (entryEntryId) => {
    const nextExpenses = await NextExpense.findAll({
        where: {
            entryEntryId: entryEntryId
        }
    })

    return nextExpenses
}

const getNextExpense = async (nextExpenseId) => {
    const nextExpense = await NextExpense.findOne({
        where: { nextExpenseId: nextExpenseId }
    })
    return nextExpense
}

const updateExpense = async (nextExpense, check) => {
    nextExpense.check = check;
    await nextExpense.save();
    return nextExpense;
}

module.exports = {
    add: createNextExpense,
    list: getNextExpenses,
    listOne: getNextExpense,
    update: updateExpense
}