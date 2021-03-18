/*; Title: Assignment 1.3
; Author: Professor Cross
; Date 17 March 2021
; Modified By: Jourdan Neal
; Description: Node to parse URL. 
=====================================================
*/

var url = require("url");
//Creating variable to contain parsed URL.
var parsedURL = url.parse("https://www.thisismysite.com/profile?name=neal");
//Parsing out protocol-should return https.
console.log(parsedURL.protocol);
//Parsing out the host--should return www.thisismysite.
console.log(parsedURL.host);
//Parsing out the query-everything after ?, should return name=neal.
console.log(parsedURL.query);