const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const userRouter = require('../components/user/routes');
const expenseRouter = require('../components/expense/routes');
const categoryRouter = require('../components/category/routes');
const subcategoryRouter = require('../components/subcategory/routes');
const { MONTHS } = require('../utils/consts');
const alertRouter = require('../components/alert/routes');

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

app.get('/api/utils/months', (req, res) => {
    res.send(MONTHS);
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


module.exports = app;