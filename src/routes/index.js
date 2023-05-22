const { Router } = require("express");

const userRouter = require("./user.routes");
const sessionsRouter = require("./session.routes");
const adiminRoutes = require("./adimin.routes");
const mealsRoutes = require("./meals.routes");
const drinKsRoutes = require("./drinks.routes");



const routes = Router();

routes.use("/users", userRouter);
routes.use("/adimin", adiminRoutes)

routes.use("/meals", mealsRoutes);
routes.use("/drinks", drinKsRoutes);
routes.use("/sessions", sessionsRouter);

module.exports = routes;
