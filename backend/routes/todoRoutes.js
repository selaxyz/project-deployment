const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();
const { getAllTodos, addTodo } = todoController;

//USER ROUTES
router.route('/').get(getAllTodos).post(addTodo);
// router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
