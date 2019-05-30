const mongoose = require("mongoose");
const config = require("config");
const dbConnection = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(dbConnection, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("Node js is connected to Mongo DB");
  } catch (err) {
    console.log(err);

    // Exit the process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
