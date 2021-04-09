/*
=====================================================
; Title: Assignment 4.3 HTTP Status Codes
; Author: Professor Krasso
; Date 9 April 2021
; Modified By: Jourdan Neal
; Description: HTTP status codes.
=====================================================
*/

//Import libraries.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


var app = express();

//Create get request, with error response to /secretstuff status code 403- forbidden.
app.get("/secretstuff", function(request, response) {
    response.status(403);
    response.json({
        error: "This page is FORBIDDEN!"
    })

});
//Get request at /mcdsIceCreamMachine to return status code 503 (service not available)- Page loaded correctly.
app.get("/mcdsIceCreamMachine", function(request,response){
    response.status(503);
    response.json(
        {error: "This service is unavailable (almost always)."
    })
});
//Get request at /dangerto return status code 500(internal server error).
app.get("/danger", function(request,response){
    response.status(500);
    response.json({
        error: "Internal Server Error!"
    })
});

//Create server listening on port 8080.
http.createServer(app).listen(8080,function(){
    //Log message to verify server is working.
    console.log("App started on port 8080.")
});