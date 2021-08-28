const { errors, success } = require('../../network/response');
const { getExpenses, createExpense } = require('./controller');

const expenseRouter = require('express').Router();

expenseRouter.get('/:id', async(req, res) =>{
    try {
        const userId = req.params.id;
        const expenses = await getExpenses(userId);
        success(req, res, expenses);
    } catch (error) {
        errors(req, res, error);
    }
});

expenseRouter.post('/', async(req, res)=>{
    res.send(process.env.DB_HOST);
    try {
        const expense = await createExpense(req.body);
        success(req, res, expense);
    } catch (error) {
        errors(req, res, error);
    }
})

module.exports = expenseRouter;