const router = require('express').Router();
const { Todo, Auth } = require('../../models');
const withAuth = require('../../utils/auth');

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

    if (todoData) {
      const todo = todoData.get({ plain: true });
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newTodo = await Todo.create({
      ...req.body,
      auth_id: req.session.auth_id,
    });
    res.status(200).json(newTodo);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Project not found' });
    }
    if (todo.auth_id !== req.session.auth_id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    await todo.update(req.body);
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const todoData = await Todo.destroy({
      where: {
        id: req.params.id,
        auth_id: req.session.auth_id,
      },
    });
    if (!todoData) {
      res.status(404).json({ message: 'No Project found with this id!' });
      return;
    }
    res.status(200).json(todoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;