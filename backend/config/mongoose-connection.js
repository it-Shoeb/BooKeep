const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log(`MongoDB Connected`);
  })
  .catch((error) => {
    console.log(`MongoDB Error Messae: ${error.message}`);
  });

module.exports = mongoose.connection;
