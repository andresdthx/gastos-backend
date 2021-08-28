const { createCategory, getCategoriesByUser } = require('./controller');
const { success, errors } = require('../../network/response');

categoryRouter = require('express').Router();

categoryRouter.post('/', async(req, res) => {
    try {
        const category = await createCategory(req.body);
        success(req, res, category);
    } catch (error) {
        errors(req, res, error);
    }
});

categoryRouter.get('/:id', async(req, res) => {
    try {
        const categories = await getCategoriesByUser(req.params.id);
        success(req, res, categories);
    } catch (error) {
        errors(req, res, error);
    }
})

module.exports = categoryRouter;