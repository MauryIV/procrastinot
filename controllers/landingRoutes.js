const router = require('express').Router();
const { Auth } = require('../models');

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