const router = require('express').Router();
const { Auth } = require('../models');
const bcrypt = require('bcrypt');

// for new user
router.post('/auth/register', async (req, res) => {
  try {
    // hash for password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

 
    const newUser = await Auth.create({
      username: req.body.username,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (err) {

    res.status(500).json(err);
  }
});

router.post('/auth/login', async (req, res) => {
  try {
    const user = await Auth.findOne({
      where: {
        username: req.body.username,
      },
    });

    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }


    res.status(200).json({ message: 'Logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/auth/:id', async (req, res) => {
  try {
    const user = await Auth.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy();


    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
