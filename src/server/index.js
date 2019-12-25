const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
var router = require('./routes/index.js');
const path = require('path');
const PORT = process.env.NODEJS_PORT;
const HOST = process.env.NODEJS_IP;
const app = express();
var compression = require('compression');
app.use(compression());
app.use(express.static(path.join(__dirname, '../../dist'), {
    maxAge: '1000000000' // 
}));
app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});
app.use('/api', router);
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../../dist', 'index.html'))
})




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);