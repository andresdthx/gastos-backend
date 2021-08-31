module.exports = (sequelize, type) => {
    return sequelize.define('categories', {
        categoryId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        category: {
            type: type.STRING(20),
            allowNull: false,
            unique: false
        }
    });
}