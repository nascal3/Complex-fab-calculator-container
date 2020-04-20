const express = require('express');
const cors = require('cors');
const Values = require('./valueModel');
const redis = require('./redisConfig');

 module.exports = (app) => {
   app.use(
     cors(),
     express.json()
   );

   app.get('/api', (req, res) => {
     res.status(200).send('hi');
   });

   app.get('/api/values/all', async (req, res) => {
     const values = await Values.findAll();
     res.status(200).json({'data': values});
   });

   app.get('/api/values/current', async (req, res) => {
     redis.redisClient.hgetall('values', (err, values) => {
       res.status(200).json({'data': values});
     });
   });

   app.post('/api/values', async (req, res) => {
     const index = parseInt(req.body.index);

     if (index > 40) return res.status(422).send('Index value too high');
     redis.redisClient.hset('values', index, 'Nothing yet!');
     redis.redisPublisher.publish('insert', index);

     try {
       await Values.create({
         number: index
       });
     } catch (err) {
       throw new Error(err.message)
     }

     res.status(200).json({'data': true});
   });
 };
