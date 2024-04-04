// Use for PUT, DELETE, POST, routes
const router = require('express').Router();
const { Completed } = require('../../models');
const withAuth = require('../../utils/auth');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.post('/completed', async (req, res) => {

});

router.put('/completed', async (req, res) => {

});

router.delete('/completed', async (req, res) => {

});