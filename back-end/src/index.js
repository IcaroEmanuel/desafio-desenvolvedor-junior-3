require('dotenv').config();
const express = require('express');
const cors = require('cors')

const routes = require('./routes');

const app = express();

const port = process.env.PORT;

app.use((_request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  response.header('Access-Control-Allow-Headers', '*');
  app.use(cors());
  next();
})

routes(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

module.exports = app;
