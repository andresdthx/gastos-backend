module.exports = (sequilize, type) => {
    return sequilize.define('subcategories', {
        subcategoryId: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        subcategory: {
            type: type.STRING(45),
            allowNull: false,
            unique: false
        }
    });
}