const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
    connectionLimit: 10,
    host : process.env.HOST,
    user : process.env.USER,
    database : process.env.DB,
    password : process.env.PWD
})
db.getConnection((error,conn) =>{
    if(error) throw error;
    console.log('Database connected successfully')
})

module.exports = db;