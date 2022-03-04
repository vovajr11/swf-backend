const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

// const productsRouter = require("./routes/api/products");
const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');
const coursesRouter = require('./routes/api/courses');
const modulesRouter = require('./routes/api/modules');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const { DOMAIN_NAME } = process.env;

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', DOMAIN_NAME);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
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
