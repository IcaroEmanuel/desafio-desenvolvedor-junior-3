const db = require("../models");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const jwtSecret = require("../config/jwtSecret")

class AuthService {
  static async login(data) {
    const user = await db.User.findOne({
      attributes: ['id','name', 'email', 'password'],
      where: {
        email: data.email,
      }
    })

    if (!user) {
      throw new Error('Usuário não cadastrado.');
    }

    const samePassword = await compare(data.password, user.password);

    if(!samePassword) {
      throw new Error('Usuário ou senha inválidos.');
    }

    const accessToken = sign({
      id: user.id,
      email:user.email,
    }, jwtSecret.secret, {
      expiresIn: 86400
    })

    return { accessToken };
  }
}

module.exports = AuthService;
