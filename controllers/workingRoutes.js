// Use for GET routes
const router = require('express').Router();
const { Working, Auth } = require('../models');
const withAuth = require('../utils/auth');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.get('/', async (req, res) => {
try {
  const workingData = await Working.findAll({
  });
  const workings = workingData.map((working) => working.get({ plain: true }));
  res.render('working', {
    workings,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
  try {
    const workingData = await Working.findByPk(req.params.id, {
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
    const working = workingData.get({ plain: true });
    res.render('working', { 
      working, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;