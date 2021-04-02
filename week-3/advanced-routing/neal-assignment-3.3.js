/*
=====================================================
; Title: Assignment 3.3 Advanced Routing
; Author: Professor Krasso
; Date 2 April 2020
; Modified By: Jourdan Neal
; Description: Advanced routing, express, ejs, and morgan.
=====================================================
*/
//Require specific libraries
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();
//Set view and view engine.
app.set('views', path.resolve(__dirname, 'views'));//Telling Express to look in views files.
app.set('view engine','ejs');//Use EJS view engine.

app.use(logger('short'));//Use logger.

//Function to response to request after /.
app.get('/:employeeId', function(request,response){
    //Creat productId variable. ParseInt will process the string and return an integer productId. 
    var employeeId = parseInt(request.params.employeeId, 10);
    //Render product following index
    response.render('index',{
        employeeId:employeeId        
    })
});

//Create server listening on port 8080, log message that application is running on port.
http.createServer(app).listen(8080, function(){
    console.log('Application started on port 8080');
});
