const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router
  .post('/register', UserController.registerUser)
  .get('/users', UserController.getUsers)

module.exports = router;
