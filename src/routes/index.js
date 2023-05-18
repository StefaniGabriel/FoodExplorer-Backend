const { Router } = require("express");

const userRouter = require("./user.routes");
const sessionsRouter = require("./session.routes");
const adiminRoutes = require("./adimin.routes");
const mealsRoutes = require("./meals.routes");


const routes = Router();

routes.use("/users", userRouter);
routes.use("/adimin", adiminRoutes)

routes.use("/meals", mealsRoutes)
routes.use("/sessions", sessionsRouter);

module.exports = routes;
