const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('../components/user/routes');
const expenseRouter = require('../components/expense/routes');
const categoryRouter = require('../components/category/routes');
const subcategoryRouter = require('../components/subcategory/routes');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/api/users', userRouter);
app.use('/api/expenses', expenseRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/subcategories', subcategoryRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


module.exports = app;