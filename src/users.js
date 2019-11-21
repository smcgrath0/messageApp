const express = require('express');
const connection = require('./connection');
const router = express.Router();

router.get('/', (req, res, next) => {
  connection.query('SELECT * FROM `users`', (err, users, fields) => {
    if (err) return next(err);
    res.send(users);
  });
});

module.exports = router;
