const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

 var Login = require('../dao/Login');


const logger = require('morgan');
const connexion = require('../config/connexion');


const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  /**
   * Get all volontaire
   */
  app.get('/', function (req, res) {

    connexion.query('SELECT * FROM volunteers', (err, resultat) => {
        if (err) {

            return res.status(400).json('Une erreur est survenue: '+ err);
    
          }
          return res.status(200).json(resultat);
        });
});


  app.post('/add', function(req, res, next) {

    // const connexion = require('../config/connexion');
    let {name, email, user_id} = req.body;
    connexion.query('INSERT INTO volunteers SET ?, `created_at` = NOW()', {
      name, email, user_id
    }, (err, resultat) => {
        if (err) {

            return res.status(400).json('Email ou password incorrect');
    
          }
          return res.status(201).json(resultat);
        });
  });
  



module.exports = app;