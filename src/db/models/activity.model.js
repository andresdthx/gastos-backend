module.exports = (sequelize, type) => {
    return sequelize.define('activities', {
        activityId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        activity: {
            type: type.TEXT,
            allowNull: false
        },
        date: {
            type: type.DATE,
            allowNull: false
        },
        done: {
            type: type.BOOLEAN
        },
        index: {
            type: type.INTEGER,
            unique: true,
            allowNull: false
        }
    },{
        timestamps: false,
    });
}