const { errors, success } = require("../../network/response");
const {
  getExpenses,
  createExpense,
  getExpense,
  deleteExpense,
  getExpensesOrderByDate,
} = require("./controller");
const { validateData } = require("../../middlewares/expense.middleware");

const expenseRouter = require("express").Router();

expenseRouter.post("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const months = req.body.months;
    const expenses = await getExpenses(userId, months);
    success(req, res, expenses);
  } catch (error) {
    errors(req, res, error);
  }
});

expenseRouter.post("/", validateData, async (req, res) => {
  try {
    const expense = await createExpense(req.body);
    res.send(expense);
    success(req, res, expense);
  } catch (error) {
    errors(req, res, error);
  }
});

expenseRouter.get("/:id", async (req, res) => {
  try {
    const expense = await getExpense(req.params.id);
    success(req, res, expense);
  } catch (error) {
    errors(req, res, error.message);
  }
});

expenseRouter.get("/byDate/:id", async (req, res) => {
  try {
    const expenses = await getExpensesOrderByDate(req.params.id);
    success(req, res, expenses);
  } catch (error) {
    errors(req, res, error.message);
  }
});

expenseRouter.delete("/:id", async (req, res) => {
  try {
    const expense = await deleteExpense(req.params.id);
    success(req, res, expense);
  } catch (error) {
    errors(req, res, error.message);
  }
});

module.exports = expenseRouter;
