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
    firstName:{type: String, required: true, unique: true},
    lastName: {type: String, required: true, unique: true}
});

//define employee model
var Employee = mongoose.model("Employee", employeeSchema);

//expose the employee to calling files
module.exports = Employee;

