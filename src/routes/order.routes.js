const { Router } = require("express");

const OrderController = require("../controllers/OrderController");

const orderRoutes = Router();

const orderController = new OrderController();

orderRoutes.get("/:id", orderController.getOrderById);
orderRoutes.post("/:id", orderController.createOrder);
orderRoutes.get("/", orderController.getOrders);

module.exports = orderRoutes;