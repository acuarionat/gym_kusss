const mysql = require('mysql2/promise')
async function connectDB() {
    const connection = await mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''
    })
    const result = await connection.query('SELECT 1+1 AS Result')
    console.log(result)
}

module.exports = connectDB
//const connectDB = require('/database/connectDB')
//connectDB()