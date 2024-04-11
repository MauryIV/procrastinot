const router = require('express').Router();
const { Working, Auth } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const authData = await Auth.findByPk(req.session.auth_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Working }],
    });
    const auth = authData.get({ plain: true });
    res.render('working', {
      ...auth,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const workingData = await Working.findByPk(req.params.id, {
      include: [
        {
          model: Auth,
          attributes: ['name'],
        },
      ],
    });
    const working = workingData.get({ plain: true });
    const isCreator = (working.auth_id === req.session.auth_id);
    res.render('project', {
      ...working,
      logged_in: req.session.logged_in,
      isCreator,
      model: 'working'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;