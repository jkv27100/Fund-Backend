require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const log = require("debug")("app:dev");
const registerRouter = require("./routes/register.routes");
const loginRouter = require("./routes/login.routes");
const notiRouter = require("./routes/notifications.routes");
const postRouter = require("./routes/posts.routes");

const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;
app.use(express.json());

connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log("DB Is Connected...");
  } catch (error) {
    log(`could not connect to DB : ${error}`);
  }
};
connectDB();

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/noti", notiRouter);
app.use("/api/posts", postRouter);

log(app.get("env"));

app.listen(PORT, () => {
  log(`Running on port ${PORT}`);
});
