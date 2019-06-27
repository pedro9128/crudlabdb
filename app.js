var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const db = require('./config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {});

require('./controller/aluno-route.js')(app);

// Create a Server
var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})