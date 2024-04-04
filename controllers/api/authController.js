// Use for PUT, DELETE, POST, routes
const router = require('express').Router();
const { Auth } = require('../../models');

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
      req.session.user_id = authData.id;
      req.session.logged_in = true;
      res.json({ auth: authData, message: 'You are now logged in!' });
    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/auth', async (req, res) => {

});

router.delete('/auth', async (req, res) => {

});

module.exports = router;