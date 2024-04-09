// Imports required modules.
const router = require('express').Router(); 
const { Completed, Auth } = require('../models'); 
const withAuth = require('../utils/auth'); 
const TimeManager = require('als-time-manager'); 

const timeManager = new TimeManager(); 

// Route to render completed projects page
router.get('/', withAuth, async (req, res) => {
  try {
    const authData = await Auth.findByPk(req.session.auth_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Completed }],
    });
    const auth = authData.get({ plain: true });
    res.render('completed', {
      ...auth, 
      logged_in: true, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to render specific completed project details
router.get('/:id', async (req, res) => {
  try {
    // Finds specific completed project data
    const completedData = await Completed.findByPk(req.params.id, {
      include: [
        {
          model: Auth,
          attributes: ['name'],
        },
      ],
    });
    const completed = completedData.get({ plain: true }); 
    const isCreator = (completed.auth_id === req.session.auth_id); 
    // Rendering details page with completed project data and auth status
    res.render('project', {
      ...completed, 
      logged_in: req.session.logged_in, 
      isCreator, 
      model: 'completed', 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router; 
