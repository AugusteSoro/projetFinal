var db = require('../config/db');

// Obtenir le model USERS
var User = db.extend({
    tableName: "users",
});

// Instancier un objet du model
user = new User();

// var Login = {
//     getVolontaire: function(callback)
//     {
//         return db.query('SELECT * from users', callback);
//     },
//     getOneVolontaire: function(client, callback)
//     {
//         return db.query('SELECT * FROM users WHERE email = ? and password = ? LIMIT 1', [client.email, client.password], callback );
//     }

// }


    // Fonctions pour le login
var Login = {
    getVolontaire: function(callback)
    {
        return user.find('all', callback);

    },
    getOneVolontaire: function(client, callback)
    {
        // console.log("SELECT * FROM users WHERE email = '" + client.email + "' and password = '" + client.password + "' LIMIT 1;");
        user.query("SELECT * FROM users WHERE email = '" + client.email + "' and password = '" + client.password + "' LIMIT 1", callback);
    }

}



module.exports = Login;