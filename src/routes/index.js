const { Router } = require("express");

const userRouter = require("./user.routes");
const sessionsRouter = require("./session.routes");
const productRoutes = require("./product.routes");

const routes = Router();

routes.use("/users", userRouter);

routes.use("/product", productRoutes);

routes.use("/sessions", sessionsRouter);

module.exports = routes;
