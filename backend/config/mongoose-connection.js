const mongoose = require("mongoose");

const connectionToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`MongoDB Error Messae: ${error.message}`);
  }
};

connectionToDatabase();

module.exports = mongoose.connection;
