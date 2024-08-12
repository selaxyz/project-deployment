const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();
const { getAllTodos } = todoController;

//USER ROUTES
router.route('/').get(getAllTodos);
// router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
