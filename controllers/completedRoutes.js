// Use for GET routes
const router = require('express').Router();
const { Completed } = require('../models');
const withAuth = require('../utils/auth');

router.get('/completed', async (req, res) => {

});

module.exports = router;