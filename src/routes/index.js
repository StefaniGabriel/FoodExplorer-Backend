const { Router } = require("express");

const userRouter = require("../routes/user.routes");

const sessionsRouter = require("../routes/session.routes");
const adiminroutes = require("../routes/adimin.routes");


const routes = Router();

routes.use("/users", userRouter);
routes.use("/adimin", adiminroutes)

routes.use("/users", userRouter);
routes.use("/sessions", sessionsRouter)

module.exports = routes;
