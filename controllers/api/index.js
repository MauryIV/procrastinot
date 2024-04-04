<<<<<<< Updated upstream
const router = require('express').Router();
const authRoutes = require('./authRoutes');
const todoRoutes = require('./todoRoutes');
const workingRoutes = require('./workingRoutes');
const completedRoutes = require('./completedRoutes');
=======
const router = require("express").Router();
const authRoutes = require("./authController");
const todoRoutes = require("./todoController");
const workingRoutes = require("./workingController");
const completedRoutes = require("./completedController");
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();
>>>>>>> Stashed changes

router.use('/auth', authRoutes);
router.use('/todo', todoRoutes);
router.use('/working', workingRoutes);
router.use('/completed', completedRoutes);

module.exports = router;