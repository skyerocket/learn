const express = require("express");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json());

app.use('/api/1.0', userRouter);

console.log("env", process.env.NODE_ENV)

module.exports = app;
