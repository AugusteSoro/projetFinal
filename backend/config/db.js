var mysql      = require('mysql');
var mysqlModel = require('mysql-model');

var connection = mysqlModel.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'trackers'
});
module.exports=connection;