const router = require('express').Router();

<<<<<<< Updated upstream
const apiRoutes = require('./api');
const authRoutes = require('/authRoutes');
const todoRoutes = require('/todoRoutes');
const workingRoutes = require('/workingRoutes');
const completedRoutes = require('/completedRoutes');
=======
const apiRoutes = require("./api");
const landingRoutes = require("./landingRoutes");
const authRoutes = require("./authRoutes");
const todoRoutes = require("./todoRoutes");
const workingRoutes = require("./workingRoutes");
const completedRoutes = require("./completedRoutes");
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();
>>>>>>> Stashed changes

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);
router.use('/todo', todoRoutes);
router.use('/working', workingRoutes);
router.use('/completed', completedRoutes);

module.exports = router;
