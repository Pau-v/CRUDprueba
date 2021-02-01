"use strict";

var express = require('express');
var exphbs = require('express-handlebars');
var handlebars = require('handlebars');

var app = express();

require('./db');

// HANDLEBARS
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials/',
    layoutsDir: __dirname + '/views/layouts/',
}));
app.set('view engine', 'handlebars');

app.set('views', __dirname + '/views');

// ARCHIVOS ESTÁTICOS
app.use(express.static(__dirname + '/public'));

// RUTAS
app.use(require('./routes/loginRoute'));
app.use(require('./routes/taskRoute'));

// SERVIDOR
app.listen(3009, () => {
    console.log(`${3009} express escuchando`);
});
