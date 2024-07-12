const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://artlens108:artlens108@cluster0.bbifgnf.mongodb.net/golo?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDatabase;
