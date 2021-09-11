const { validateGrouper, loadInclude } = require("../../services/expense");
const { list, create, listOne } = require("./store")

const getExpenses = async (userId, months, groupers) => {

    const attributes = validateGrouper(groupers);
    const include = loadInclude(groupers);

    const expenses = await list(userId, months, groupers, attributes, include);
    if(!expenses) throw new Error('Gastos no encontrados');

    return expenses;
}

const getExpense = async(expenseId) => {
    const expense = await listOne(expenseId);
    if (!expense) throw new Error('Expense not found');
    return expense;
}

const createExpense = async(objExpense) => {
    const expense = await create(objExpense);
    if(!expense) throw new Error('errar creando gasto');

    return expense;
}

module.exports = {
    getExpenses,
    createExpense,
    getExpense
}