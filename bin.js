#!/usr/bin/env node

var uncolor = require(__dirname + '/.');

process.stdin.on('data', function(d) {
  console.log(uncolor(d.toString()));
});
