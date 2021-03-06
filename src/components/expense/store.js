const {
  Expense,
  Category,
  Subcategory,
  sequelize,
} = require("../../db/connection");
const { Op } = require("sequelize");

const getExpenses = async (userUserId, months, year) => {
  const expenses = await Expense.findAll({
    where: {
      [Op.and]: [
        { userUserId: userUserId },
        sequelize.where(sequelize.fn("month", sequelize.col("date")), {
          [Op.or]: months,
        }),
        sequelize.where(sequelize.fn("year", sequelize.col("date")), year),
      ],
    },
    order: [["date", "DESC"]],
    include: [Category, Subcategory],
  });
  return expenses;
};

const getExpensesOrderByDate = async (userUserId) => {
  const expenses = await Expense.findAll({
    attributes: [[sequelize.fn("sum", sequelize.col("value")), "total"], 'date'],

    where: {
      userUserId: userUserId,
    },

    order: [["date", "DESC"]],

    group: [sequelize.fn("year", sequelize.col("date"))],

    include: [Category, Subcategory],
  });
  return expenses;
};

const createExpense = async (objExpense) => {
  const expense = await Expense.create(objExpense);
  return expense;
};

const getExpense = async (expenseId) => {
  const expense = await Expense.findOne({
    attributes: ["expenseId", "description", "value", "date"],
    where: { expenseId: expenseId },
    include: [
      {
        model: Category,
        attributes: [
          ["categoryId", "value"],
          ["category", "label"],
        ],
      },
      {
        model: Subcategory,
        attributes: [
          ["subcategoryId", "value"],
          ["subcategory", "label"],
        ],
      },
    ],
  });
  return expense;
};

const deleteExpense = async (expenseId) => {
  const expense = await Expense.destroy({
    where: {
      expenseId: expenseId,
    },
  }).then((rowDeleted) => {
    return { deleted: rowDeleted };
  });

  return expense;
};

module.exports = {
  list: getExpenses,
  listOne: getExpense,
  listByDate: getExpensesOrderByDate,
  create: createExpense,
  remove: deleteExpense,
};
