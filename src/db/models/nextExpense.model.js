module.exports = (sequelize, type) => {
    return sequelize.define('nextExpenses', {
        expenseId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        description: {
            type: type.TEXT
        },
        value: {
            type: type.DECIMAL,
            allowNull: false,
            validate: {
                isInt: {
                    msg: 'Valor incorrecto'
                }
            }
        },
        date: {
            type: type.DATE,
            allowNull: false
        }
    });
}