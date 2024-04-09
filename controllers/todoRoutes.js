// Sets up routes for handling todo-related things.
const router = require('express').Router();
const { Todo, Auth } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Fetches authenticated user's todo data from the database
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
    // Fetches todo data by ID from the database
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
