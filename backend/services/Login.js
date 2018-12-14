const express = require('express');
// const router = express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

// const cors = require('cors')

// router.use(cors);
// router.use(bodyParser.json());
 var Login = require('../dao/Login');




const logger = require('morgan');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  



app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');

    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // res.setHeader('Access-Control-Allow-Credentials', true);

    Login.getVolontaire(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

  /**
 * Action de login
 *
 * Contact via la methode POST
 */
app.post('/', (req, res, next) => {
    const { email, password } = req.body;
    // console.log('password OK OK');
    // console.log(password);
    // console.log(email);

  
    // On vérifie l"email est correct
    if (typeof email === 'undefined') {
    //   req.session.flash = {
    //     error: true,
    //     message: 'Email est vide!'
    //   };
  
      // return res.redirect('/login');
      return res.status(204).json('Email vide');
    }
  
    const connexion = require('../config/connexion');
  
    connexion.query('SELECT * FROM users WHERE email = ? LIMIT 1', [connexion.escape(email)], (err, resultat) => {
      // On vérifie s'il y a pas d'erreur
       const user = resultat[0];
    //   console.log('BD*******');
    //   console.log(user);
    //   console.log(resultat);
    //   console.log('*******');

    //   console.log(resultat[0]);
    //   console.log(user.password);




      
      if (err || typeof user == 'undefined') {
        // req.session.flash = {
        //   error: true,
        //   message: 'Email or password error !'
        // };
  
        //return res.redirect('/login');
        return res.status(204).json('Email ou password incorrect');


      }
  
      // On compare le mot de passe de l'utilisateur
      if (!bcrypt.compareSync(connexion.escape(password), user.password)) {
        // req.session.flash = {
        //   error: true,
        //   message: 'Email or Password error !'
        // };
  
        // return res.redirect('/login');
        return res.status(204).json('Email ou mot de passe incorrect');


      }
  
      // Changement de la session de l'utilisateur
      // user.name = user.name.trim("'");
      // req.session.user = user;
  
      // return res.redirect('/');

      return res.status(200).json(user);

    });
  });
  



module.exports = app;