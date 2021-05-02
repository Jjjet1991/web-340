/*
=====================================================
; Title: Assignment 7.3 Chai Example
; Author: Professor Cross
; Date 3 May 2021
; Modified By: Jourdan Neal
; Description: Testing using Chai
=====================================================
*/

//add required libraries
var fruits = require("../neal-fruits");
var chai = require("chai");
//use chai assert function
var assert = chai.assert;
//describe() takes in two arguments, name of test group and callback function.
describe("fruits", function(){
    //What the function should be doing.
    it("should return an array of fruits", function(){
        //creating f variable equal to created array.
        var f = fruits('Apple,Orange,Mango');
        //using assert function to see if (f) is an array.
        assert(Array.isArray(f));
    });
});

//Output 1 passing! 