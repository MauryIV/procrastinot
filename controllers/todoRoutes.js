// Use for GET routes
const router = require('express').Router();
const { Todo } = require('../models');
const withAuth = require('../utils/auth');

router.get('/todo', async (req, res) => {

});