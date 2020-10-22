import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

const handlelistening = () =>
  console.log(`listening on: http://localhost:${port}`);

const handlehome = (req, res) => res.send("Hi from home");

const handleprofile = (req, res) => res.send("This is my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));

/* app.use(logger("tiny"));
app.use(logger("combined"));
app.use(logger("common")); */

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
