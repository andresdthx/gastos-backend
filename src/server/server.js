require('dotenv').config();

const express = require('express');
const cron = require('node-cron');
const app = express();
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

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
});

// app.use(morgan);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// cron.schedule('30 10 * * *', () => {
//     sendAlerts()
//     console.log("enviado");
// });

cron.schedule('* * * * *', async () => {
    const response = await fetch('https://deroapp.herokuapp.com/api/alerts/send');
    const body = await response.json();
    console.log('inside cron function', body);
});



module.exports = app;