const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `messages`', (err, messages, fields) => {
    if (err) return next(err);
    res.send(messages);
  });
});

router.post('/', (req, res, next) => {
  connection.query('SELECT * FROM `messages`', (err, messages, fields) => {
    if (err) return next(err);
    res.send(messages);
  });
});

module.exports = router;
