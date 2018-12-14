var express = require('express');
var app = express();

var Login = require('./Login');
var Volontaire = require('./volontaire');

app.use('/login', Login);
app.use('/volontaire', Volontaire);


module.exports = app;
