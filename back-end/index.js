require("dotenv").config();
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.status(200).send('Hello World'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));