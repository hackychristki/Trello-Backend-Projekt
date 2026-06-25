const express = require('express');
const morgan = require('morgan');
const cardsRouter = require('./routes/cardsRoutes');
const usersRouter = require('./routes/usersRoutes');

const app = express()

app.use("/api/v1/cards", cardsRouter);
app.use("/api/v1/users", usersRouter);

module.exports = app;