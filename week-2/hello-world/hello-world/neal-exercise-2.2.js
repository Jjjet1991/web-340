/*; Title: Assignment 2.2 Hello World
; Author: Professor Cross
; Date 25 March 2021
; Modified By: Jourdan Neal
; Description: Hello World  with Express.
=====================================================
*/
var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res)
{
console.log("In comes a request to: %s'", req.url);
res.end("Hello World\n");
})

http.createServer(app).listen(8080, function(){
    console.log('Application started on port %s', 8080);
});