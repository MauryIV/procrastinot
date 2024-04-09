// Setting up routes for different pages of the application and importing the neccessary modules.
const router = require('express').Router();
const { Auth, Todo, Working, Completed } = require('../models');

// Renders landing page.
router.get('/', (req, res) => {
  res.render('landingpage', { logged_in: req.session.logged_in });
});

// Rendering the authentication page.
router.get('/auth', (req, res) => {
  res.render('auth', { logged_in: req.session.logged_in });
});

// Rendering the account creation page.
router.get('/create', (req, res) => {
  res.render('createaccount', { logged_in: req.session.logged_in });
});

// Rendering the dashboard page.
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { logged_in: req.session.logged_in });
});

// Rendering the about page.
router.get('/about', (req, res) => {
  res.render('about', { logged_in: req.session.logged_in });
});

// Retrieving and rendering user profile data from the database.
router.get('/profile', async (req, res) => {
  try {
    const authData = await Auth.findByPk(req.session.auth_id, {
      attributes: { exclude: ['password'] },
    });
    const { id, name } = authData;
    res.render('profile', {
      id,
      name,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
