require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const { MONTHS } = require('../utils/consts');

const userRouter = require('../components/user/routes');
const expenseRouter = require('../components/expense/routes');
const categoryRouter = require('../components/category/routes');
const subcategoryRouter = require('../components/subcategory/routes');
const alertRouter = require('../components/alert/routes');
const activityRouter = require('../components/activity/routes');
const entryRouter = require('../components/entry/routes');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/frontend/index.html'));
});

app.use(express.static(path.join(__dirname, '../../public/frontend')));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/api/users', userRouter);
app.use('/api/expenses', expenseRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/subcategories', subcategoryRouter);
app.use('/api/alerts', alertRouter);
app.use('/api/activities', activityRouter);
app.use('/api/entries', entryRouter);

app.get('/api/utils/months', (req, res) => {
    res.send(MONTHS);
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;