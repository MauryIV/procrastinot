// Use for PUT, DELETE, POST, routes
const router = require('express').Router();
const { Todo } = require('../../models');
const withAuth = require('../../utils/auth');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.post('/todo', async (req, res) => {

});

router.put('/todo', async (req, res) => {

});

router.delete('/todo', async (req, res) => {

});

module.exports = router;