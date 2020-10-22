import express from "express";
import logger from "morgan";
const app = express();
const port = 4000;

const handlelistening = () =>
  console.log(`listening on: http://localhost:${port}`);

const handlehome = (req, res) => res.send("Hi from home");

const handleprofile = (req, res) => res.send("This is my profile");

const handlebetween = (req, res, next) => {
  console.log("Btween");
  next();
};

app.use(handlebetween);

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
