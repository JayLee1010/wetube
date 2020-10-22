import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handlehome = (req, res) => res.send("Hi from home");

const handleprofile = (req, res) => res.send("This is my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(logger("dev"));

app.get("/", handlehome);

app.get("/profile", handleprofile);

app.use("/user", userRouter);

export default app;
