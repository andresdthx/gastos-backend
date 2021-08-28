module.exports = (sequelize, type) => {
    return sequelize.define('categories', {
        categoryId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        category: {
            type: type.STRING(45),
            allowNull: false,
            unique: true
        }
    });
}