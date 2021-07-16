require("dotenv").config();
const User = require('./models/User');
const mongoose = require("mongoose");
const log = require("debug")("app:dev");
const URI = process.env.URI;

connectDB = async () => {
    try {
      await mongoose.connect("mongodb+srv://kakashi:qw1@cluster0.euq07.mongodb.net/fundRaiserDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      log("DB Is Connected...");
    } catch (error) {
      log(`could not connect to DB : ${error}`);
    }
  };
connectDB();
User.countDocuments({}, function (err, count) {
    console.log('count is', count)
    console.log('err is ', err)
    console.log('test')
});

