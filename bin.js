#!/usr/bin/env node

var uncolor = require('./');

process.stdin
  .pipe(uncolor())
  .pipe(process.stdout);
