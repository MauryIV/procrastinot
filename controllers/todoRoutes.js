const router = require('express').Router();
const { Todo, Auth } = require('../models');
const withAuth = require('../utils/auth');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.get('/', withAuth, async (req, res) => {
  try {
    const authData = await Auth.findByPk(req.session.auth_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Todo }],
    });
    const auth = authData.get({ plain: true });
    res.render('todo', {
      ...auth,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const todoData = await Todo.findByPk(req.params.id, {
      include: [
        {
          model: Auth,
          attributes: ['name'],
        },
      ],
    });
    const todo = todoData.get({ plain: true });
    const isCreator = (todo.auth_id === req.session.auth_id);
    res.render('project', {
      ...todo,
      logged_in: req.session.logged_in,
      isCreator,
      model: 'todo'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;