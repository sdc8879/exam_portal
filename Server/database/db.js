var mysql = require('mysql');
var dbcred = require('../config');

//create database connection
const conn = mysql.createConnection({
    host: dbcred.dbConfig.host,
    port: dbcred.dbConfig.port,
    user: dbcred.dbConfig.user,
    password: dbcred.dbConfig.password,
    database: dbcred.dbConfig.database
});

//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});


module.exports.executeQuery = function (sqlQuery) {

    return new Promise((resolve, reject) => {
        conn.query(sqlQuery, (error, result, fields) => {

            if (error) {
                reject({
                    error: "Error in executeQuery Execution",
                    message: error.sqlMessage
                });
            } else {
                resolve(result)
            }

        });
    });

}


module.exports.executePreparedQuery = function (sqlQuery, parameters) {

    console.log('sqlQuery--------', sqlQuery);
    console.log('parameters--------', parameters);

    return new Promise((resolve, reject) => {
        conn.query(sqlQuery, parameters, (error, result, fields) => {

            if (error) {
                reject({
                    error: "Error in executePreparedQuery Execution",
                    message: error.sqlMessage
                });
            } else {
                resolve(result);
            }

        });
    });

}