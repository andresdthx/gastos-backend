const { Expense, Category, Subcategory } = require('../../db/connection');

const getExpenses = async (userUserId) =>{
    const expenses = await Expense.findAll({
        where: {
            userUserId: userUserId
        },
        order: [
            ['date', 'ASC']
          ],
        include: [Category, Subcategory]
    });
    return expenses;
}

const createExpense = async(objExpense) => {
    const expense = await Expense.create(objExpense);
    return expense;
}

module.exports = {
    list: getExpenses,
    create: createExpense
}