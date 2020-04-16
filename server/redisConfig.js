const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisHost,
  retry_strategy: () => 1000
});
const redisPublisher = redisClient.duplicate();

module.exports = {
  redisClient: redisClient,
  redisPublisher: redisPublisher
};
