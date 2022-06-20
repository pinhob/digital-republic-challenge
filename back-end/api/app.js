require("dotenv").config();
const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const { errorMiddleware } = require("../middlewares/errorMiddleware");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.status(200).send('Hello World'));

app.use(routes);

app.use(errorMiddleware);

module.exports = app;