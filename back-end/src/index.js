require('dotenv').config();
const express = require('express');
const cors = require('cors')

const routes = require('./routes');

const app = express();

const port = process.env.PORT || 3001;

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

routes(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

module.exports = app;
