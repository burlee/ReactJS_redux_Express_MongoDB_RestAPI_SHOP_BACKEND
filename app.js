const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongoDBconfig = require('./MongoDBconfig');

mongoose.connect(mongoDBconfig.module.mongoURI, { useNewUrlParser: true })
.then( () => console.log('Correctly access'))
.catch( error => console.log(error))

module.exports = app;
