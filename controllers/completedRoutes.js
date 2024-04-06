// Use for GET routes
const router = require('express').Router();
const { Completed, Auth } = require('../models');
const withAuth = require('../utils/auth');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.get('/', async (req, res) => {
try {
  const completedData = await Completed.findAll({
  });
  const completeds = completedData.map((completed) => completed.get({ plain: true }));
  res.render('completed', {
    completeds,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
    const completedData = await Completed.findByPk(req.params.id, {
      include: [
        {
          model: Auth,
          attributes: [
            'id',
            'name',
            'email',
          ],
        },
      ],
    });
    const completed = completedData.get({ plain: true });
    res.render('completed', { 
      completed, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;