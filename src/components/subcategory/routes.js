subcategoryRouter = require('express').Router();
const { getSubcategories, createSubcategory } = require('./controller');
const {success, errors } = require('../../network/response');

subcategoryRouter.get('/:id', async(req, res) => {
    try {
        const subcategories = await getSubcategories(req.params.id);
        success(req, res, subcategories);
    } catch (error) {
        errors(req, res, error);
    }
});

subcategoryRouter.post('/', async(req, res) => {
    try {
        const subcategory = await createSubcategory(req.body);
        success(req, res, subcategory);
    } catch (error) {
        errors(req, res, error);
    }
})

module.exports = subcategoryRouter;