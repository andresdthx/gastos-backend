const { sequelize, Category } = require('../db/connection');
const validateGrouper = (groupers) => {
    let atrributes = [
        'expenseId',
    ];

    if(groupers.length > 0) {
        atrributes.push([sequelize.fn('sum', sequelize.col('value')), 'value']);    
    } else {
        atrributes.push('value');
        atrributes.push('description');
        atrributes.push('date');
    }
    
    return atrributes;
}

const loadInclude = (groupers) => {
    let include = [];

    if(groupers.includes('category') && !groupers.includes('subcategory')) include.push(Category);

    return include;
}

module.exports = {
    validateGrouper,
    loadInclude
}