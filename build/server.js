"use strict";

var path = require("path");

var config = require("./config");
var data = require("./server/data");
var app = require("./config/application").create(data);

app.get("/", function (req, res) {
    return res.sendFile(path.join(__dirname, "/index.html"));
});

console.log("Updated!");

app.listen(config.port, function () {
    return "App running at :" + config.port;
});