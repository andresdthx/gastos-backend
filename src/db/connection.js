const { Sequelize } = require('sequelize');
const UserModel = require('./models/user.model');
const CategoryModel = require('./models/category.model');
const SubcategoryModel = require('./models/subcategory.model');
const ExpenseModel = require('./models/expense.model');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
});

const User = UserModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Subcategory = SubcategoryModel(sequelize, Sequelize);
const Expense = ExpenseModel(sequelize, Sequelize);

Category.belongsTo(User);
Subcategory.belongsTo(Category);
Expense.belongsTo(Category);
Expense.belongsTo(Subcategory);
Expense.belongsTo(User);

sequelize.sync({ force: false, logging: false }).then(() => {
    console.log("Database connected!!")
})


module.exports = { sequelize, User, Category, Subcategory, Expense };