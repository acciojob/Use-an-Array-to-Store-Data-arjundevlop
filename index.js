// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname))

module.exports = app;
