var express = require('express');
var port = process.env.PORT || 3000;
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'public');

const routes = require('./controllers/index');
var indexRouter = require('./routes/index');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use('/', indexRouter);
app.use('/index', routes);

app.use(express.static(publicDir))

app.listen(port);
module.exports = app;
