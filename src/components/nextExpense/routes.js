const { errors, success } = require('../../network/response');
const { createNextExpense, getNextExpenses, getNextExpense, updateNextExpense } = require('./controller');

const nextExpenseRouter = require('express').Router();

nextExpenseRouter.post('/', async (req, res) => {
    try {
        const nexExpense = await createNextExpense(req.body)
        success(req, res, nexExpense)
    } catch (error) {
        errors(req, res, error)
    }
})

nextExpenseRouter.get('/:id', async (req, res) => {
    try {
        const nextExpenses = await getNextExpenses(req.params.id)
        success(req, res, nextExpenses)
    } catch (error) {
        errors(req, res, error)
    }
})

nextExpenseRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { check } = req.body

        const nextExpense = await getNextExpense(id)
        const nextExpenseUpdated = updateNextExpense(nextExpense, check)
        success(req, res, nextExpenseUpdated)
    } catch (error) {
        errors(req, res, error)
    }
})

module.exports = nextExpenseRouter