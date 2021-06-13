require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const debug = require("debug")("app:dev");
const registerRouter = require("./routes/register.routes");
const loginRouter = require("./routes/login.routes");
const notiRouter = require("./routes/notifications.routes");

const app = express();
app.use(express.json());

const uri = 'mongodb+srv://kakashi:qw1@cluster0.euq07.mongodb.net/fundRaiserDB?retryWrites=true&w=majority'
// mongoose.connect(uri)
connectDB = async () => {
    await mongoose.connect(uri)
    .then(console.log("DB CONNECTED"))
    .catch(err => {
console.log(err)})
}
connectDB();

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/noti", notiRouter);
// console.log(process.env.DEBUG);
// debug(app.get("env"));

app.listen(3030, () => {
  console.log("Running");
});
