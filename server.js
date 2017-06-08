// https://www.npmjs.com/package/ejs
var express = require('express');
var logger = require("morgan");
var bodyParser = require("body-parser");

var server = express();

// these are all functions btw
server.use(express.static('views')); // uses express on views folder

server.use(logger('dev')); 
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.set('views', __dirname + '/views'); // allows user to see files on views folder

server.engine('html', require('ejs').renderFile);
server.set('view engine', 'html');

// login page
/*
server.get('/', function(request, response) {
    response.render('login.ejs');
});
*/

// home page
server.get('/', function(request, response) {
    response.render('home.ejs');
});

// terms of hamster page
server.get('/terms-of-hamster', function(request, response) {
    response.render('terms-of-hamster.ejs');
});

// hamster privacy notice page
server.get('/hamster-privacy-notice', function(request, response) {
    response.render('hamster-privacy-notice.ejs');
});

var port = process.env.PORT;

server.listen(8080, function() {
    console.log('Server running on ' + port + " hamsters.");
})