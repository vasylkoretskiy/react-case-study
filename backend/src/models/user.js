const Omdb = require('../../lib/omdb');
const redis = require('../utils/redis');
const logger = require('../utils/logger');

const loggerDispatcher = 'UserModel';

async function search(keyword, page) {
  let data;
  const key = page + keyword;
  // redis.client.flushall('ASYNC', function(){});
  try {
    data = await redis.getAsync(key);
  } catch (err) {
    logger.error(err, { dispatcher: loggerDispatcher, from: 'userGetAll' });
  }
  if (data) {
    return JSON.parse(data);
  }

  data = await Omdb.getMoviesAsync(keyword, page);

  try {
    if (data) redis.client.set(key, JSON.stringify(data)); // , 'EX', 60);
  } catch (err) {
    logger.error(err, { dispatcher: loggerDispatcher, from: 'movieSearch' });
  }

  return data;
}

module.exports = {
  search,
};
