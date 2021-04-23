/*
=====================================================
; Title: Assignment 6.3 Mongoose Connections
; Author: Professor Cross
; Date 23 April 2021
; Modified By: Jourdan Neal
; Description: Creating Mongoose database. 
=====================================================
*/

//Import required libraries.
var express = require('express');
var http = require('http');
var logger = require('morgan');
var path = require('path');
var mongoose = require('mongoose');

//Create app statements.
var mongoDB = 'mongodb+srv://Jemma:smartwater@buwebdev-cluster-2.jpp7c.mongodb.net/test';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongooseDB connection error:'));
db.once('open', function() {
    console.log('Application connected');
});

var app = express();
app.use(logger('dev'));

http.createServer(app).listen(8080, function(){
    console.log("Application started and listening in port 8080");
})