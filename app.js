require("dotenv").config();
const logger = require("morgan");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const log = require("debug")("app:dev");
const registerRouter = require("./routes/register.routes");
const loginRouter = require("./routes/login.routes");
const notiRouter = require("./routes/notifications.routes");
const postRouter = require("./routes/posts.routes");
const profileRouter = require("./routes/profileImg.routes");
const sendMailRouter = require("./routes/sendMail.routes")
const transactRouter = require("./routes/transact.routes")
const addCommentRouter = require("./routes/comment.routes");
const interactionRouter = require("./routes/interaction.routes");
const locationRouter = require("./routes/location.routes")
const app = express();
const PORT = process.env.PORT;
const URI = process.env.URI;
app.use(express.json());
app.use(
  logger("common", {
    stream: fs.createWriteStream("./logs/access.log", { flags: "a" }),
  })
);
app.use(logger("dev"));

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
app.use("/api/notification", notiRouter);
app.use("/api/posts", postRouter);
app.use("/api/upload", profileRouter);
app.use("/api/mail", sendMailRouter);
app.use("/api/add_comment", addCommentRouter);
app.use("/api/post_interactions", interactionRouter);
app.use("/api/location",locationRouter)

log(app.get("env"));

app.listen(PORT, () => {
  log(`Running on port ${PORT}`);
});
