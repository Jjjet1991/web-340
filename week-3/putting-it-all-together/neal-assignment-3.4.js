/*
=====================================================
; Title: Assignment 3.4 Putting it all together
; Author: Professor Krasso
; Date 3 April 2021
; Modified By: Jourdan Neal
; Description: EJS with bootstrap styling.
=====================================================
*/

//Load required libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
const { getPriority } = require("os");

//Load express app.
var app= express();

//Tell Express to use views file, and ejs view engine.
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

//Use morgan logger.
app.use(logger("short"));

//Request response function to render home page message.
app.get("/",function(request,response){
    response.render("index",{
        message: "home page"
    });
});

//Request response function to render about page message.
app.get("/about",function(request,response){
    response.render("about",{
        message: "about page"
    });
});

//Request response function to render contact page message.
app.get("/contact",function(request,response){
    response.render("contact",{
        message: "contact page"
    });
});

//Request response function to render contact page message.
app.get("/products",function(request,response){
    response.render("products",{
        message: "products page"
    });
});

//Create server listening on 8080 port.
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.")
})