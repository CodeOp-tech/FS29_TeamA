const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
//new router
const proRouter = require("./routes/products");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", proRouter);
//api一定要吗 大多情况最好有

module.exports = app;
