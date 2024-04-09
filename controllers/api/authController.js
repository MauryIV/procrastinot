const router = require('express').Router();
const { Auth } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const authData = await Auth.create(req.body);
    req.session.save(() => {
      req.session.auth_id = authData.id;
      req.session.logged_in = true;
      res.status(200).json(authData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const authData = await Auth.findOne({ where: { email: req.body.email } });
    if (!authData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await authData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.auth_id = authData.id;
      req.session.logged_in = true;
      res.json({ auth: authData, message: 'You are now logged in!' });
    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const auth = await Auth.findByPk(req.params.id);
    if (!req.session.logged_in) {
      return res.status(403).json({ message: 'Unauthorized access' });
    }
    await auth.destroy();
    req.session.destroy(() => {
      res.status(204).end();
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
