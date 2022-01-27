module.exports = (sequelize, type) => {
    return sequelize.define('entries', {
        entryId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        entry: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                isInt: {
                    msg: 'incorrect entry value'
                }
            }
        },
        date: {
            type: type.STRING,
            allowNull: false,

        },
    },
    {
        timestamps: false
    });
}