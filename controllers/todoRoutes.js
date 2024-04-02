const express = require('express');
const router = express.Router();
const todoController = require('../controllers/api/todoController');

router.post('/createTask', todoController.createTask);

router.put('/updateTask/:id', todoController.updateTask);

router.delete('/deleteTask/:id', todoController.deleteTask);
// Other to-do routes...

module.exports = router;