const { isProd } = require('./config');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { makeErrorOperational, STATUS_INTERNAL_SERVER_ERROR } = require('../utils/error');
const logger = require('../utils/logger');
const createRequestId = require('../middlewares/create-request-id');
const apiRoute = require('../routes/api');

const loggerDispatcher = 'App';

const app = express();

app.use(createRequestId);
app.use(helmet());
app.use(cors());

// routes
app.use('/api', apiRoute);

// 404 error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  next(makeErrorOperational(err, 404));
});

// error handler
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  console.log('last resort', err);
  const status = parseInt(err.status, 10) || STATUS_INTERNAL_SERVER_ERROR;
  const response = {
    status,
    message: err.message,
  };

  if (isProd === false) {
    response.error = err;
  }

  if (err.operational === true) {
    logger.warn(err, { dispatcher: loggerDispatcher, id: req.id });
    res.status(status).send(response);
  } else {
    logger.error(err, { dispatcher: loggerDispatcher, id: req.id }, () => {
      process.exit(1);
    });
  }
});

module.exports = app;
