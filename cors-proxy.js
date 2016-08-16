#!/usr/bin/env node

var express = require('express');
var request = require('request');

var apiServerHost = "https://api.t411.ch";
var app = express();
app.use('/', function(req, res) {
  var url = apiServerHost + req.url;
  console.log(`→ ${url} (${req.headers["authorization"]})`);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization");
  res.header("Cache-Control", "max-age=600");
  options = {
    url: url,
    headers: {
      "Authorization": req.headers["authorization"],
      "User-Agent": "curl/7.47.0"
    }
  }
  req.pipe(request(options)).pipe(res);
});

app.listen(process.env.PORT || 3000);