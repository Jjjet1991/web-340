/*
=====================================================
; Title: Assignment 4.3 API Curl
; Author: Professor Krasso
; Date 9 April 2021
; Modified By: Jourdan Neal
; Description: Creating curl request using Node.js.
=====================================================
*/
const express = require("express");
const http = require("http");

let app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request.");
});

app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request");
});

app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(app.get("port"), function() {
  console.log(`Application started and listening on port ${app.get("port")}`);
});