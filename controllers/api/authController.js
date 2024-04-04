// Use for PUT, DELETE, POST, routes
const router = require('express').Router();
const { Auth } = require('../../models');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.post('/auth', async (req, res) => {

});

router.put('/auth', async (req, res) => {

});

router.delete('/auth', async (req, res) => {

});

module.exports = router;