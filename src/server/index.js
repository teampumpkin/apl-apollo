const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
var router = require('./routes/index.js');
const path = require('path');
const PORT = process.env.NODEJS_PORT;
const HOST = process.env.NODEJS_IP;
const app = express();
app.use(express.static(path.join(__dirname, '../../dist')));
app.use('/api', router);
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../../dist', 'index.html'))
})




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);