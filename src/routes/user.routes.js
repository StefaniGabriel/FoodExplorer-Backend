const { Router } = require("express");

const UserController = require("../controllers/UserController");
const AdminController = require("../controllers/AdminController");

const userRoutes = Router();

const userController = new UserController();
const adminController = new AdminController();

userRoutes.post("/", userController.create);
userRoutes.post("/admin", adminController.userAdmin);


module.exports = userRoutes;