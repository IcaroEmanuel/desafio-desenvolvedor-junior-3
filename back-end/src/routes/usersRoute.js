const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router
  .post('/users', UserController.registerUser)

module.exports = router;
