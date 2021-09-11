const { errors, success } = require('../../network/response');
const { getExpenses, createExpense, getExpense } = require('./controller');

const expenseRouter = require('express').Router();

expenseRouter.post('/:id', async(req, res) =>{
    try {
        const userId = req.params.id;
        const months = req.body.months;
        const groupers = req.body.groupers;
        const expenses = await getExpenses(userId, months, groupers);
        success(req, res, expenses);
    } catch (error) {
        errors(req, res, error);
    }
});

expenseRouter.post('/', async(req, res)=>{
    try {
        const expense = await createExpense(req.body);
        success(req, res, expense);
    } catch (error) {
        errors(req, res, error);
    }
});

expenseRouter.get('/:id', async(req, res) => {
    try {
        const expense = await getExpense(req.params.id);
        success(req, res, expense);
    } catch (error) {
        errors(req, res, error.message);
    }
})

module.exports = expenseRouter;