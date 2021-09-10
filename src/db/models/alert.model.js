module.exports = (sequelize, type) => {
    return sequelize.define('alerts', {
        alertId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        message: {
            type: type.TEXT,
            allowNull: false
        },
        date: {
            type: type.INTEGER,
            allowNull: false
        },
        active: {
            type: type.BOOLEAN
        },
    },{
        timestamps: false,
    });
}