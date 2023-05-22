require("express-async-errors");
require('dotenv/config');

const express = require("express");
const cors = require('cors');


const AppError = require("./utils/AppError");
const database = require("./database/sqlite");
const routes = require("./routes");


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

database();

app.use( (error, request, response, next ) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    return response.status(error.statusCode).json({
        status: "error",
        message: "Internal server error"
    })


});

const PORT = process.env.PORT_SECRET;
app.listen(PORT, () => console.log(`Rodando em ${PORT}`))
