const express = require("express");
const app = express();
const data = require('./data.json')

app.use((req, res, next) => {
  res.status(200).send(data);
});

module.exports = app;
