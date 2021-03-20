/*; Title: Assignment 1.5
; Author: Professor Cross
; Date  20 March 2021
; Modified By: Jourdan Neal
; Description: Hello World, setting up server. 
=====================================================
*/

//Require library http.
var http = require("http");
//Function passing request and response.
function processRequest(req,res){
    //String that will print to the server.
    var body = "I can't believe this worked!";
    //Will count the characters in body.
    var contentLength= body.length;
    //Response to browser: status code 200 meaning everything went OK, value to send to header: plain/text, then displaying body txt.
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}
//Creating variable to create server.
var s =http.createServer(processRequest);
//Displaying s variable port 8080.
s.listen(8080);

