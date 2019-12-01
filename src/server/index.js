const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
var router = require('./routes/index.js');
const PORT =  process.env.NODEJS_PORT;
const HOST =  process.env.NODEJS_IP;
const app = express();
app.use('/',express.static('dist'))
app.use('/api', router);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);