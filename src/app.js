const express = require('express');

const router = require('./routes/mainRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(router);

module.exports = app;