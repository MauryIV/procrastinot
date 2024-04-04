const router = require('express').Router();
const { Auth, Todo, Working, Completed } = require('../models');
<<<<<<< HEAD
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();
=======
>>>>>>> main

router.get('/', (req, res) => {
  res.render('langingpage');
});

module.exports = router;