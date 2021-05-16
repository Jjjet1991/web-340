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
var helmet = require('helmet');
var mongoose = require("mongoose");


//Use express app.
var app = express();

//adding CSRF
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');


//Required employee info from model in models file.
var csrfProtection = csrf({cookie: true});

//Import Employee modules from employee.js
var Employee = require("./models/employee");

//Connect to MongoDB
var mongoDB = "mongodb+srv://admin:shelby6@cluster0.xtiif.mongodb.net/ems2?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
});

//Create promise
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongooseDB connection error:'));
db.once('open', function() {
console.log('Application connected to MongoDB.');
});

//CSRF protection
app.use(bodyParser.urlencoded({
extended:true
}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {
var token = request.csrfToken();
response.cookie('XSRF-TOKEN', token);
response.locals.csrfToken = token;
next();
});


//Tell express to check "views" folder for additional files.
app.set("views", path.resolve(__dirname, "views"));

//Use express view engine.
app.set("view engine", "ejs");

//Use logger.
app.use(logger("short"));

//Use helmet
app.use(helmet.xssFilter());

//Request/Response function for "/" to Home Page
app.get("/", function(request,response){
response.render("index", {
title: "Home page"
  });
});

//Create new employee page.
app.get("/new", function(request,response){
response.render("new", {
title: "New Employee Page"
 });
});
//Process page -- must have a first and last name entry.
app.post("/process", function(request, response) {

if (!request.body.firstName) {
response.status(400).send("You must enter a first name.");
return;
}

if (!request.body.lastName) {
response.status(400).send("You must enter a last name.");
return;
}

var firstName = request.body.firstName;
var lastName = request.body.lastName;

var employee = new Employee({
firstName: firstName,
lastName: lastName
});

employee.save(function (error) {
if (error) throw error;
console.log(firstName + " " + lastName + " your entry is saved!")
});
response.redirect("/");
});

//List page showing employee first and last name.
app.get("/list", function(request, response) {
Employee.find({}, function(error, employees) {
if (error) throw error;
response.render("list", {
title: "Employee List",
employees: employees
    });
  });
});

//View query 
app.get("/view/:queryName", function(request,response){
var queryName = request.params['queryName'];
Employee.find({'firstName':queryName}, function(error, employees) {

if (error) throw error;
console.log(employees);

if(employees.length> 0){
response.render("view", {

title: "Employee Record",
employee: employees
  });
}
else {
response.redirect("/list") 
    }  
  });
});

//Modify applications port
app.set("port", process.env.PORT || 8080);

//Create server, listening on port 8080. Log comment to verify that application is running on port.
http.createServer(app).listen(app.get("port"), function(){
console.log("Application started and listening on port 8080!")
});

