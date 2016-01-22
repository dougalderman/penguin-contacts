var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var penguinCtrl = require('./controllers/penguinCtrl');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/../public'));

var mongoUri = 'mongodb://localhost:27017/penguins';

mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
    console.log("Successfully connected to mongodb")
})

app.get('/api/penguins', penguinCtrl.read);
app.post('/api/penguins', penguinCtrl.create);



var portId = 3000;
app.listen(portId, function() {
    console.log('listening on port ', portId);      
})