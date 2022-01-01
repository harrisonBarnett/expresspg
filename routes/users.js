var express = require('express');
var router = express.Router();

const pool = require('../dbconfig')

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users')
    res.json(users)
  } catch (error) {
    console.error(error)
  }
});

router.post('/', async (req, res) => {
  try {
    pool.query('INSERT INTO users (first_name, last_name) VALUES ($1, $2)', [req.body.firstName, req.body.lastName])
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
