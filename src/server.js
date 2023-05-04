const express = require("express");

const database = require("./database/sqlite");

require('dotenv').config();

const app = express();
app.use(express.json());

database();

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Rodando em ${PORT}`))
