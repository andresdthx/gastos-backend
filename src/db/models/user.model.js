module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        userId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username:{
            type: type.STRING(80),
            allowNull: false,
            unique: true
        },
        email:{
            type: type.STRING(80),
            allowNull: false,
            unique: true
        },
        password: {
            type: type.STRING(45),
            allowNull: false,
        }

    });
}