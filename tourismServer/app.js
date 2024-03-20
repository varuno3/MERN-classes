const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRoutes');

app.use(express.json());
app.use('/tours',tourRouter)


module.exports = app;