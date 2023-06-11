const { Router } = require("express");
const auth = require("./auth_routes.js");

const router = Router();

router.use("/", auth);

module.exports = router;
