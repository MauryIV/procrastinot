const router = require('express').Router();
const { Completed, Auth } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const completedData = await Completed.findByPk(req.params.id, {
      include: [
        {
          model: Auth,
          attributes: ['name'],
        },
      ],
    });

    if (completedData) {
      const completed = completedData.get({ plain: true });
      res.status(200).json(completed);
    } else {
      res.status(404).json({ message: 'Completed not found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newCompleted = await Completed.create({
      ...req.body,
      auth_id: req.session.auth_id,
    });
    res.status(200).json(newCompleted);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const completed = await Completed.findByPk(req.params.id);
    if (!completed) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (completed.auth_id !== req.session.auth_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await completed.update(req.body);
    res.status(200).json(completed);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const completedData = await Completed.destroy({
      where: {
        id: req.params.id,
        auth_id: req.session.auth_id,
      },
    });
    if (!completedData) {
      res.status(404).json({ message: 'No Project found with this id!' });
      return;
    }
    res.status(200).json(completedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;