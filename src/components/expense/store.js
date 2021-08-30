const { Expense, Category, Subcategory, sequelize } = require('../../db/connection');
const { Op } = require('sequelize');

const getExpenses = async (userUserId, months, group, attributes) =>{
    const expenses = await Expense.findAll({
        attributes: attributes,
        where: {
            [Op.and]:[
               { userUserId: userUserId },
               sequelize.where(sequelize.fn('month', sequelize.col('date')), {
                    [Op.or]: months
               })
            ]
        },
        group: group,
        order: [
            ['expenseId', 'DESC']
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