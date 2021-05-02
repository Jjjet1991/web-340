/*
=====================================================
; Title: Assignment 7.2 TDD in Action
; Author: Professor Cross
; Date 3 May 2021
; Modified By: Jourdan Neal
; Description: Testing using Tdd with Mocha
=====================================================
*/

//Add required libraries
var assert = require("assert");

//describe() takes in two arguments, name of test group and callback function.
describe("String#split", function() {

      /*it() should be written if you are saying it out loud, also takes in 2 arguments, 
      a string explaining what the test should do and and callback function*/
  it("should return an array of fruits", function() {

      //Assertion library tool to verify things are correct (defined in required libraries).
      assert(Array.isArray('Apple,Orange,Mango,'.split(',')));

      //Checking if the array Apple, Orange, Mango with split "," is an array.
  });

}); 
