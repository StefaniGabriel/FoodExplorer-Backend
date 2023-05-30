const { Router } = require("express");

const SessionsController = require("../controllers/SessionsController");
const ensureAuthentication = require("../middlewares/ensureAuthentication");

const sessionsController = new SessionsController();

const sessionsRoutes = Router();
sessionsRoutes.post("/", ensureAuthentication, sessionsController.authentication);

module.exports = sessionsRoutes;

