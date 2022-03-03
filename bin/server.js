const mongoose = require('mongoose');

const app = require('../app');

const { DB_HOST } = process.env;

const port = process.env.PORT || 4000;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(port))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
