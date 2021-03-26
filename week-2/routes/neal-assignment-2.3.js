/*
=============================================
Title: Assignment 2.3
Author: Professor Cross
Date: 26 March 2021
Modified By: Jourdan Neal
Description:
=============================================
*/
//Add required express library.
const { response } = require("express");
var express = require("express");
//Add required http library.
var http = require("http");

var app = express();
//Respond with Welcome to the homepage to get request.
app.get("/",function(request,response){
    response.end("Welcome to the homepage!");
});
//Respond to get request /about (about page).
app.get("/about",function(request,response){
    response.end("Welcome to the about page!");
});
//Respond when request is made to the /contact page.
app.get("/contact",function(request,response){
    response.end("Welcome to the contact page!");
});
//Browser not finding what was requested-error.
app.use(function(request,response){
    response.statusCode = 404;
    response.end("404!")
});
//Create server Port 8080
http.createServer(app).listen(8080);