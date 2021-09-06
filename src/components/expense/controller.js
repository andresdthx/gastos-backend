const { validateGrouper, loadInclude } = require("../../services/expense");
const { list, create } = require("./store")

const getExpenses = async (userId, months, groupers) => {

    const attributes = validateGrouper(groupers);
    const include = loadInclude(groupers);
    // return attributes;
    const expenses = await list(userId, months, groupers, attributes, include);
    if(!expenses) throw new Error('Gastos no encontrados');

    return expenses;
}

const createExpense = async(objExpense) => {
    const expense = await create(objExpense);
    if(!expense) throw new Error('errar creando gasto');

    return expense;
}

module.exports = {
    getExpenses,
    createExpense
}