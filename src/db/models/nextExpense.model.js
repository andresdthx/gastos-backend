module.exports = (sequelize, type) => {
    return sequelize.define('nextExpenses', {
        nextExpenseId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        value: {
            type: type.DECIMAL,
            allowNull: false,
            validate: {
                isInt: {
                    msg: 'incorrect next expense value'
                }
            }
        },
        check: {
            type: type.BOOLEAN,
            defaultValue: false
        },
    },
    {
        timestamps: false
    });
}