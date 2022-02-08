const { Sequelize } = require('sequelize');
const UserModel = require('./models/user.model');
const CategoryModel = require('./models/category.model');
const SubcategoryModel = require('./models/subcategory.model');
const ExpenseModel = require('./models/expense.model');
const AlertModel = require('./models/alert.model');
const TypeAlertModel = require('./models/typesAlerts.model');
const SubscribeModel = require('./models/subscribe.model');
const ActivityModel = require('./models/activity.model');
const EntryModel = require('./models/entry.model');
const nextEspense = require('./models/nextExpense.model')
const dbConfig = require('../config/db.config');
const nextExpenseModel = require('./models/nextExpense.model');

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
const Alert = AlertModel(sequelize, Sequelize);
const Subscribe = SubscribeModel(sequelize, Sequelize);
const TypeAlert = TypeAlertModel(sequelize, Sequelize);
const Activity = ActivityModel(sequelize, Sequelize);
const Entry = EntryModel(sequelize, Sequelize);
const NextExpense = nextExpenseModel(sequelize, Sequelize);

Category.belongsTo(User);
Subcategory.belongsTo(Category);
Expense.belongsTo(Category);
Expense.belongsTo(Subcategory);
Expense.belongsTo(User);
Alert.belongsTo(User);
Subscribe.belongsTo(User);
User.hasMany(Subscribe);
Alert.belongsTo(TypeAlert);
Activity.belongsTo(TypeAlert);
Activity.belongsTo(User);
Entry.belongsTo(User);
Entry.hasMany(NextExpense, { as: "nextExpense" });

sequelize.sync({ force: false, logging: false }).then(() => {
    console.log("Database connected!!")
})


module.exports = { sequelize, User, Category, Subcategory, Expense, Alert, Subscribe, TypeAlert, Activity, NextExpense, Entry };