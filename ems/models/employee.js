/*
=====================================================
; Title: Assignment 7.4 EMS- Mongoose Schema and Model Development
; Author: Professor Cross
; Date 3 May 2021
; Modified By: Jourdan Neal
; Description: Creating Mongoose schema for employee info.
=====================================================
*/

//Add required libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define employee schema
var employeeSchema = new Schema({
    //First and last name field.
    firstName:String,
    lastName:String
});

//define employee model
var Employee = mongoose.model("Employee",employeeSchema);

//expose the employee to calling files
module.exports = Employee;

//Using the model

//Add required libraries
var express = require("express");
var http = require("http");
var mongoose = require("mongoose");

var logger = require("morgan");

var Employee = require("./models/employee");

var mongoDB = 'mongodb+srv://Jemma:<password>@buwebdev-cluster-2.jpp7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
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
app.use(logger('short'));

//Employee Model
var Employee = new Employee({
    firstName: "Jane",
    lastName:"Austen"
});

//Create server
https.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080")
});