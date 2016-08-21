#!/usr/bin/env node

// This little node.js proxy is only here because the T411 API doesn't send CORS headers
// so we can't query the API from a browser due to the same origin policy.
// If they change their API, I'll be able to remove it and node.js dependencies.

var express = require('express');
var request = require('request');

var apiServerHost = "https://api.t411.ch";
var app = express();

app.get('/', (req,res) => { res.sendFile('t412.html', {root: __dirname}); });

app.use('/', (req, res) => {
  var url = apiServerHost + req.url;
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