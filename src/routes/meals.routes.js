const { Router } = require("express");

const MealsController = require("../controllers/MealsController");

const mealsRoutes = Router();

const mealsController = new MealsController(); 



mealsRoutes.post("/", mealsController.create);
mealsRoutes.put("/:id", mealsController.update);
mealsRoutes.delete("/:id", mealsController.delete);
mealsRoutes.get("/", mealsController.showAll);
mealsRoutes.get("/:id", mealsController.showOne);




module.exports = mealsRoutes;