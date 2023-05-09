const { Router } = require("express");

const AdiminController = require("../controllers/AdiminController");

const adiminRoutes = Router();

const adiminController = new AdiminController();

adiminRoutes.post("/", adiminController.create);


module.exports = adiminRoutes;