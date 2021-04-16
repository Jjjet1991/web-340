/*
=====================================================
; Title: Assignment 5.3 Pug Templates
; Author: Professor Cross
; Date 16 April 2021
; Modified By: Jourdan Neal
; Description: Creating Pug template page.
=====================================================
*/

//Add required statements.

var express = require("express");
var http = require("http");
var pug = require("pug")
var path = require ("path");

//App requirement statement.
var app = express();
//Tell express to check views folder for any additional files.
app.set("views", path.resolve(__dirname, "views"));
//Set view engine using pug.
app.set("view engine", "pug");
//Create get function to render request and response.
app.get("/", function(request,response){
    response.render("index",{
        //Message to display on response to "/".
        message:"Pug--More than just an adorable furry K-9!"
    });
});

//Create server.
http.createServer(app).listen(8080, function(){
    //Logging message to confirm that app is listening on port 8080.
    console.log("Application has started on port 8080.");
});

