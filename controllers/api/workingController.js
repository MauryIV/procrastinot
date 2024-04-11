const router = require('express').Router();
const { Working, Auth } = require('../../models');
const withAuth = require('../../utils/auth');

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

    if (workingData) {
      const working = workingData.get({ plain: true });
      res.status(200).json(working);
    } else {
      res.status(404).json({ message: 'Working not found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newWorking = await Working.create({
      ...req.body,
      auth_id: req.session.auth_id,
    });
    res.status(200).json(newWorking);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const working = await Working.findByPk(req.params.id);
    if (!working) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (working.auth_id !== req.session.auth_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await working.update(req.body);
    res.status(200).json(working);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/timer/:id', withAuth, async (req, res) => {
  try {
    const working = await Working.findByPk(req.params.id);
    if (working.auth_id !== req.session.auth_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    const minutes = working.time_applied
    const newMinutes = minutes + 1;
    working.time_applied = `${newMinutes}`;
    await working.update(req.body);
    res.status(200).json(working);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/plus/:id', withAuth, async (req, res) => {
  try {
    const working = await Working.findByPk(req.params.id);
    if (working.auth_id !== req.session.auth_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    const minutes = working.time_applied
    const newMinutes = minutes + 15;
    working.time_applied = `${newMinutes}`;
    await working.update(req.body);
    res.status(200).json(working);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/minus/:id', withAuth, async (req, res) => {
  try {
    const working = await Working.findByPk(req.params.id);
    if (working.auth_id !== req.session.auth_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    const minutes = working.time_applied;
    let newMinutes = 0;
    if (working.time_applied > 14) {
      newMinutes = minutes - 15;
    }
    working.time_applied = `${newMinutes}`;
    await working.update(req.body);
    res.status(200).json(working);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const workingData = await Working.destroy({
      where: {
        id: req.params.id,
        auth_id: req.session.auth_id,
      },
    });
    if (!workingData) {
      res.status(404).json({ message: 'No Project found with this id!' });
      return;
    }
    res.status(200).json(workingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;