const { sequelize } = require('../db/connection');
const validateGrouper = (groupers) => {
    let atrributes = [
        'expenseId',
        // 'description',
        // 'date',
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

module.exports = {
    validateGrouper
}