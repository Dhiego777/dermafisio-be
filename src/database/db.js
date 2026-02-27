const mysql = require('mysql2');
const config = require('../config/configDataBase');

const pool = mysql.createPool(config);

module.exports = pool.promise();
