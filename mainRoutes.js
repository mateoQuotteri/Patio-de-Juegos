const express = require("express");
const otherRoutes = require("./otherRoutes");
const mainController = require("../controllers/mainController");
//const userLogs = require("../middlewares/user-logs");

const router = express.Router();

router.get("/", mainController.home )


module.exports = router;




