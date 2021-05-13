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
var Employee = require("./models/employee");

var csrfProtection = csrf({cookie:true});

//Connect to MongoDB
var mongoDB = "mongodb+srv://admin:shelby6@cluster0.xtiif.mongodb.net/ems2?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
//Create promise
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongooseDB connection error:'));
db.once('open', function() {
    console.log('Application connected');
});

//CSRF protection
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request,response,next){
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
})


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

app.post("/process", function(request, response) {
    // console.log(request.body.txtName);
    if (!request.body.firstNameTxt) {
        response.status(400).send("Entries must have a name");
        return;
    }
    // get the request's form data
    var firstName = request.firstNameTxt;
    //console.log(firstName);
    // create a fruit model
    var firstName = new Employee({
        firstName: firstName
    });
    // save
    firstName.save(function (error) {
        if (error) throw error;
        console.log(firstName + " saved successfully!");
    });
    response.redirect("/");
 });

 app.get("/list", function(request, response) {
    Employee.find({}, function(error, fruits) {
       if (error) throw error;
       response.render("list", {
           title: "Employee List",
           employee: employee
       });
    });
});
//Create server, listening on port 8080. Log comment to verify that application is running on port.
http.createServer(app).listen(8080, function(){
    console.log("Application started and listening on port 8080!")
});
