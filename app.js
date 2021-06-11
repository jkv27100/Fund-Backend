require("dotenv").config();
const express = require("express");
const debug = require("debug")("app:dev");
const registerRouter = require("./routes/register.routes");
const loginRouter = require("./routes/login.routes");

const app = express();
app.use(express.json());

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
// console.log(process.env.DEBUG);
// debug(app.get("env"));

app.listen(3030, () => {
  console.log("Running");
});
