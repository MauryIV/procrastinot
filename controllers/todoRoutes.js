// Use for GET routes
const express = require('express');
const router = require('express').Router();
const { Todo, Auth } = require('../models');
const withAuth = require('../utils/auth');
const TimeManager = require('als-time-manager');

const timeManager = new TimeManager();

router.get('/', async (req, res) => {
try {
  const todoData = await Todo.findAll({
  });
  const todos = todoData.map((todo) => todo.get({ plain: true }));
  res.render('todo', {
    todos,
    logged_in: req.session.logged_in,
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
          attributes: [
            'id',
            'name',
            'email',
          ],
        },
      ],
    });
    const todo = todoData.get({ plain: true });
    res.render('todo', { 
      todo, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;