// app/index.js

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const alexa = require('./alexa.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', (req, res) => {
  alexa.handler(req.body, (response) => {
    if (response === "Invalid application id!")
      res.status(401).send(response);
    else
      res.send(response);
  })
});

exports.listener = app;