const { Router } = require("express");
const authControllers = require("../controllers/auth_controller.js");

const router = Router();

router.post("/createuser", authControllers.createUser);

router.post("/auth", authControllers.authenticateUser);

module.exports = router;
