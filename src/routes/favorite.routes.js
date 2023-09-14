const { Router } = require("express");

const FavoriteController = require("../controllers/FavoriteController");

const favoriteRoutes = Router();

const favoriteController = new FavoriteController();

favoriteRoutes.get("/:id", favoriteController.getFavorites);
favoriteRoutes.post("/:id", favoriteController.createFavorite);
favoriteRoutes.delete("/:id", favoriteController.deleteFavorite);

module.exports = favoriteRoutes;