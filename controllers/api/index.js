const router = require('express').Router();
const authRoutes = require('./authRoutes');
const todoRoutes = require('./todoRoutes');
const workingRoutes = require('./workingRoutes');
const completedRoutes = require('./completedRoutes');

router.use('/auth', authRoutes);
router.use('/todo', todoRoutes);
router.use('/working', workingRoutes);
router.use('/completed', completedRoutes);

module.exports = router;