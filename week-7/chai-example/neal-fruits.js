/*
=====================================================
; Title: Assignment 7.3 Chai Example
; Author: Professor Cross
; Date 3 May 2021
; Modified By: Jourdan Neal
; Description: Testing using Chai
=====================================================
*/

//Fruit function return a string with split separated (,)
function fruits(str) {
    return str.split(',')
}
//Exports fruits.
module.exports = fruits;