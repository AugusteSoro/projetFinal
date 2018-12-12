// var mysql      = require('mysql');
// var connection = mysql.createPool({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'trackers'
// });
var mysqlModel = require('mysql-model');

var connection = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'trackers',
  });


module.exports=connection;