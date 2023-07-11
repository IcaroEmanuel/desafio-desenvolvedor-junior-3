const db = require("../models");
const { hash } = require("bcryptjs");
const uuid = require("uuid");

class UserService {
  static async registerUser(data) {
    const user = await db.User.findOne({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new Error("Usuário já cadastrado");
    }

    try {
      const hashPassword = await hash(data.password, 8);

      const newUser = await db.User.create({
        id: uuid.v4(),
        name: data.name,
        email: data.email,
        password: hashPassword,
      });

      return newUser;
    } catch (error) {
      throw new Error('Erro ao cadastrar usuário.');
    }
  }

  static async getUsers() {
    try {
      const users = await db.User.findAll();

      return users;
    } catch (error) {
      throw new Error('Nenhum usuário encontrado');
    }
  }
}

module.exports = UserService;
