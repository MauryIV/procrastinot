const router = require('express').Router();
const { Auth, Todo, Working, Completed } = require('../models');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.get('/', (req, res) => {
  res.render('landingpage');
});

module.exports = router;