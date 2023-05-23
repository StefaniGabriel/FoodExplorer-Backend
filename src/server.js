require("express-async-errors");
require('dotenv/config');

const express = require("express");
const cors = require('cors');


const AppError = require("./utils/AppError");
const createAdminAccount = require("./utils/Admin");

const database = require("./database/sqlite");
const routes = require("./routes");


const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);


database();

createAdminAccount();

app.use((err, request, response, _) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: "Error",

        message: `Internal server error ${err.message}`,

    });
});

const PORT = process.env.PORT_SECRET;
app.listen(PORT, () => console.log(`Rodando em ${PORT}`))


