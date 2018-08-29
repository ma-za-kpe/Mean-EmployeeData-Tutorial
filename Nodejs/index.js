const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
const employeeController = require('./controllers/employeeController.js');

var app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('server has started at the port : 3000'));

app.use('/employees', employeeController);