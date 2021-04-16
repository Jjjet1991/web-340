/*
=====================================================
; Title: Assignment 5.2 EJS Templates
; Author: Professor Cross
; Date 16 April 2021
; Modified By: Jourdan Neal
; Description: Creating EJS template page.
=====================================================
*/
//Add require statements.
var express = require ('express');
var http = require('http');
var path = require('path');

//Add app functions.
var app = express();
//Telling Express to look in views files for files.
app.set('views', path.resolve(__dirname, 'views'));
//Use the EJS engine viewer.
app.set('view engine', 'ejs');

//Create Princess array.
var k = [
    "Belle",
    "Ariel",
    "Snow White",
    "Aurora",
    "Cinderella"
];
//Request and response statement calling princess using variable k.
app.get("/", function(req,res){
    res.render('index',{
        princesses:k
    });
});

//Create a server.
http.createServer(app).listen(8080, function(){
    console.log('Application is running on port 8080.');
})