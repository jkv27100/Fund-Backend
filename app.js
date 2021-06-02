import debug from "debug";
import express from "express";
import auth from "./routes/auth.js";

const app = express();
const devDebug = debug("app:dev");

app.use("/auth", auth.router);

devDebug(app.get("env"));
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  devDebug("server running" + PORT);
});
