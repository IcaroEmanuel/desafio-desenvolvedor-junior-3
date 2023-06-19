const { verify, decode } = require('jsonwebtoken');
const jwtSecret = require('../config/jwtSecret');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json('Acces Token não informado.');
  }

  const [, accessToken] = token.split(" ");

  try {
    verify(accessToken, jwtSecret.secret)

    const { id, email } = await decode(accessToken);
    
     req.id = id;
     req.email = email;

     return next();
  } catch (error) {
    res.status(401).json('Usuário não autorizado');
  }
}
