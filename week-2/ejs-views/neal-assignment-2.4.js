/*
=====================================================
; Title: Assignment 2.4 EJS Express
; Author: Professor Krasso
; Date 2/ March 2021
; Modified By: Jourdan Neal
; Description: EJS with bootstrap styling.
=====================================================
*/
var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); 

app.get("/",function(request,response) {
    response.render("index",{
        firstName: "Jourdan",
        lastName: "Neal",
        address: "Hayden, ID 83835"
    });
});
http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});