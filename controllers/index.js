const router = require("express").Router();

const apiRoutes = require("./api");
const landingRoutes = require("./landingRoutes");
const todoRoutes = require("./todoRoutes");
const workingRoutes = require("./workingRoutes");
const completedRoutes = require("./completedRoutes");
// const TimeManager = require('als-time-manager');

// const timeManager = new TimeManager();

router.use("/api", apiRoutes);
router.use("/", landingRoutes);
router.use("/todo", todoRoutes);
router.use("/working", workingRoutes);
router.use("/completed", completedRoutes);

module.exports = router;
