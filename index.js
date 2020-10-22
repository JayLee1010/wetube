const express = require("express");
const app = express();
const port = 4000;

function handlelistening() {
  console.log(`listening on: http://localhost:${port}`);
}

const handlehome = (req, res) => res.send("Hi from home");

const handleprofile = (req, res) => res.send("This is my profile");

app.get("/", handlehome);

app.get("/profile", handleprofile);

app.listen(port, handlelistening);

/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

*/
