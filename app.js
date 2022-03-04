const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST } = process.env;

// const productsRouter = require("./routes/api/products");
const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');
const coursesRouter = require('./routes/api/courses');
const modulesRouter = require('./routes/api/modules');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

mongoose
  .connect(DB_HOST)
  .then(() => console.log('MongoBD Connected...'))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

// app.use('/api/products', productsRouter)
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/modules', modulesRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
