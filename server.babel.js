var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');


const app = express();

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
