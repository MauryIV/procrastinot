const router = require("express").Router();

<<<<<<< HEAD
<<<<<<< Updated upstream
const apiRoutes = require('./api');
const authRoutes = require('/authRoutes');
const todoRoutes = require('/todoRoutes');
const workingRoutes = require('/workingRoutes');
const completedRoutes = require('/completedRoutes');
=======
=======
>>>>>>> main
const apiRoutes = require("./api");
const landingRoutes = require("./landingRoutes");
const authRoutes = require("./authRoutes");
const todoRoutes = require("./todoRoutes");
const workingRoutes = require("./workingRoutes");
const completedRoutes = require("./completedRoutes");
<<<<<<< HEAD
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();
>>>>>>> Stashed changes
=======
>>>>>>> main

router.use("/api", apiRoutes);
router.use("/", landingRoutes);
router.use("/auth", authRoutes);
router.use("/todo", todoRoutes);
router.use("/working", workingRoutes);
router.use("/completed", completedRoutes);

module.exports = router;
