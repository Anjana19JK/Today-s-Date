const express = require("express");

const app = express();

app.get("/", (request, response) => {
  const dateToday = new Date();

  response.send(
    `${dateToday.getDate()}-${
      dateToday.getMonth() + 1
    }-${dateToday.getFullYear()}`
  );
});

module.exports = app;
