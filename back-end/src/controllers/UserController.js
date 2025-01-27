const UserService = require("../services/userService");

class UserController {
  static async registerUser(req, res) {
    const { name, email, password } = req.body;

    try {
      const user = await UserService.registerUser({ name, email, password });

      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserService.getUsers();

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

module.exports = UserController;
