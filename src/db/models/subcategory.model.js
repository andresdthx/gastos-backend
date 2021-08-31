module.exports = (sequilize, type) => {
    return sequilize.define('subcategories', {
        subcategoryId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        subcategory: {
            type: type.STRING(20),
            allowNull: false,
            unique: false
        }
    });
}