var express = require('express');
var app = express();

var Login = require('./services/Login');
app.use('/login', Login);

module.exports = app;
