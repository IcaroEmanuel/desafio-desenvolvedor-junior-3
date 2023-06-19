const AuthService = require("../services/AuthService");

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const login = await AuthService.login({ email, password });

      res.status(200).json(login);
    } catch (error) {
      res.status(401).json(error.message);
    }
  }
}

module.exports = AuthController;
