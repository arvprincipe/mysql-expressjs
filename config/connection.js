'use strict'

const mysql = require('promise-mysql2')

let pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '',
  user            : '',
  password        : '',
  database        : ''
});

module.exports = pool