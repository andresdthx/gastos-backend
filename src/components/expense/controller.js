const { validateGrouper, loadInclude } = require("../../services/expense");
const { list, create, listOne, remove, listByDate } = require("./store")

const getExpenses = async (userId, months) => {

    const expenses = await list(userId, months);
    if(!expenses) throw new Error('Gastos no encontrados');

    return expenses;
}

const getExpensesOrderByDate = async (userId) => {

    const expenses = await listByDate(userId);
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
    if(!expense) throw new Error('Error creating expense');

    return expense;
}

const deleteExpense = async(expenseId) => {
    const expense = await remove(expenseId);
    if (!expense) throw new Error('Error deleted expense');

    return expense;
}

module.exports = {
    getExpenses,
    getExpense,
    getExpensesOrderByDate,
    createExpense,
    deleteExpense
}