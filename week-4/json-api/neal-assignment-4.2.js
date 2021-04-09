/*
=====================================================
; Title: Assignment 4.2 Json API
; Author: Professor Cross
; Date 9 April 2021
; Modified By: Jourdan Neal
; Description: JSON API's.
=====================================================
*/

//Import libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
const { response } = require("express");

//Use express.
var app = express();
//Get statement to request //parcel and return json response.
app.get("/parcel/:number", function (request, response) {

    var parcel = parseInt(request.params.number, 10);

    response.json({

        address: "1234 E Main",

        ownerName: "Ms.HomeOwner",

        parcelNumber: parcel

    });

});
//Creat server listening on port 8080, include statement to show server is running.
http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080.")
});