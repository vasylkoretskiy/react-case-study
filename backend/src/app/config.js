require('dotenv').config();

/* eslint-disable no-trailing-spaces */
const config = {
  /* ENV */
  isDev: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test',
  isProd: process.env.NODE_ENV === 'production',

  /* SERVER */
  PORT: parseInt(process.env.PORT, 10) || 3000,

  /* REDIS */
  REDIS_HOST: process.env.REDIS_HOST || '192.168.99.100',
  REDIS_PORT: parseInt(process.env.REDIS_PORT, 10) || 6379,

  /* LOG */
  LOG_LEVEL: process.env.LOG_LEVEL,
  LOG_TO_FILE: process.env.LOG_TO_FILE === 'true',

  API_KEY_OMDB: 'af1653a1',
};

module.exports = config;
