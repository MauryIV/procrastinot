const router = require('express').Router();
const { Auth, Todo, Working, Completed } = require('../models');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.get('/', (req, res) => {
  res.render('landingpage');

});

router.get('/auth', (req, res) => {
  res.render('auth');
});

router.get('/create', (req, res) => {
  res.render('createaccount');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');

});

module.exports = router;