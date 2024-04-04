// Use for GET routes
const router = require('express').Router();
const { Working } = require('../models');
const withAuth = require('../utils/auth');

router.get('/working', async (req, res) => {

});

module.exports = router;