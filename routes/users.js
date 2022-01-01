var express = require('express');
var router = express.Router();

const pool = require('../dbconfig')

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    const users = pool.query('SELECT * FROM user')
    res.json(users)
  } catch (error) {
    console.error(error)
  }
});

module.exports = router;
