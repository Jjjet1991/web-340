/*
=====================================================
; Title: Assignment 5.4 Milestone 1 and 2
; Author: Professor Cross
; Date 25 April 2020=1
; Modified By: Jourdan Neal
; Description: Milestone 1 and 2. Creating Employee Management System.
=====================================================
*/

//Required libraries
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

//Use express app.
var app = express();

//Tell express to check "views" folder for additional files.
app.set("views", path.resolve(__dirname, "views"));

//Use express view engine.
app.set("view engine", "ejs");

//Use logger.
app.use(logger("short"));

//Request/Response function for "/" to Home Page
app.get("/", function(request,response){
    response.render("index", {
        title: "Home page"
    });
});

//Create server, listening on port 8080. Log comment to verify that application is running on port.
http.createServer(app).listen(8080, function(){
    console.log("Application started and listening on port 8080!")
});
