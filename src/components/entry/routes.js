const { errors, success } = require('../../network/response');
const { createEntry, getEntries } = require('./controller');

const entryRouter = require('express').Router();

entryRouter.post('/', async (req, res) => {
    try {
        const entry = await createEntry(req.body)
        success(req, res, entry)
    } catch (error) {
        errors(req, res, error)
    }
})

entryRouter.get('/:id', async (req, res) => {
    try {
        const entries = await getEntries(req.params.id)
        success(req, res, entries)
    } catch (error) {
        errors(req, res, error)
    }
})

module.exports = entryRouter