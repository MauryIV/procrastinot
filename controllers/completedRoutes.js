// Use for GET routes
const router = require('express').Router();
const { Completed } = require('../models');
const withAuth = require('../utils/auth');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.get('/', async (req, res) => {
  res.render('completed');
});



module.exports = router;