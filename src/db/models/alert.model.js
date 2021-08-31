module.exports = (sequelize, type) => {
    return sequelize.define('alerts', {
        alertId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        alert: {
            type: type.STRING(20),
            allowNull: false,
            unique: false
        },
        message: {
            type: type.TEXT,
            allowNull: false
        },
        date: {
            type: type.DATE,
            allowNull: false
        },
    },{
        timestamps: false,
    });
}