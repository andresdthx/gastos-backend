const { list, create } = require("./store")

const getExpenses = async (userId) => {
    const expenses = await list(userId);
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