const router = require('express').Router();
const { Auth, Todo, Working, Completed } = require('../models');
// const TimeManager = require('als-time-manager');

// const timeManager = new TimeManager();

router.get('/', (req, res) => {
  res.render('landingpage', { logged_in: req.session.logged_in });
});

router.get('/auth', (req, res) => {
  res.render('auth', { logged_in: req.session.logged_in });
});

router.get('/create', (req, res) => {
  res.render('createaccount', { logged_in: req.session.logged_in });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', { logged_in: req.session.logged_in });
});

router.get('/about', (req, res) => {
  res.render('about', { logged_in: req.session.logged_in });
});

router.get('/profile', (req, res) => {
  res.render('profile', { logged_in: req.session.logged_in });
});

module.exports = router;