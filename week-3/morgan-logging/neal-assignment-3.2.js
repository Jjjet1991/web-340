//Loading needed libraries.
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

//Set view and view engine.
app.set("views", path.resolve(__dirname, "views"));//Telling Express to look in views files.
app.set('view engine','ejs');//Use EJS view engine.

app.use(logger('short'));//Use logger.

//Function callback that accepts request and response object.
app.get('/', function(request, response){
    response.render('index', {
        message: 'Jourdan Neal-I am so glad this worked!'
    });
});
//Create a server and listen on port 8080, log message 
http.createServer(app).listen(8080, function(){
    console.log('Application is started and listening on port 8080');
});