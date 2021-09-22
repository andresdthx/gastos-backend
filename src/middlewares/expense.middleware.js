const { errors } = require("../network/response");
const { validateEmptyData } = require("../services/expense");

const validateData = (req, res, next) => {
    const { categoryCategoryId, date, subcategorySubcategoryId, userUserId } = req.body;

    if (
        validateEmptyData(categoryCategoryId)       ||
        validateEmptyData(date)                     ||
        validateEmptyData(subcategorySubcategoryId) ||
        validateEmptyData(userUserId) 
    ) 
    errors(req, res, {name:'Error', errors: [{message: 'Datos incompletos'}] });

    next();
}

module.exports = {
    validateData
}