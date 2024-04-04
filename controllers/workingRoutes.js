// Use for GET routes
const router = require('express').Router();
const { Working } = require('../models');
const withAuth = require('../utils/auth');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.get('/working', async (req, res) => {

});

module.exports = router;