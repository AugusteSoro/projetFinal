const mysql = require('mysql');
const db = require('./index').db;
let connexion = undefined;

/**
 * Make connection
 * @returns {Pool}
 */
const connect = () => {
  if (typeof connexion === 'undefined') {
    connexion = mysql.createConnection({
      host     : db.host,
      user     : db.user,
      password : db.password,
      database : db.name,
      charset  : 'utf8mb4'
    });
  }


  return connexion;
};


module.exports = connect();
