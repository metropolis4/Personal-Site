var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/contact', indexController.contact);
app.get('/dev', indexController.dev);
app.get('/about', indexController.about);
app.get('/music', indexController.music);
app.get('/photo', indexController.photo);
app.post('/contactsubmit', indexController.contactSubmit);
var port = process.env.PORT || 3856;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
