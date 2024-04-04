const router = require('express').Router();
const { Auth, Todo, Working, Completed } = require('../models');

router.get('/', (req, res) => {
  res.render('langingpage');
});

module.exports = router;