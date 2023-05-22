const { Router } = require("express");

const DrinksController = require("../controllers/DrinksController");

const drinksRoutes = Router();

const drinksController = new DrinksController();


drinksRoutes.post("/", drinksController.create);
drinksRoutes.put("/:id", drinksController.update);
drinksRoutes.delete("/:id", drinksController.delete);
drinksRoutes.get("/", drinksController.findAll);
drinksRoutes.get("/:id", drinksController.show);




module.exports = drinksRoutes;