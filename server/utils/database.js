import mongoose from "mongoose";
import config from "./config.js";

/**
 * Function to connect database
 */
async function connectToDb() {
  let dbUri = config.ATLAS_URI;

  try {
    await mongoose.connect(dbUri);
    console.log("database connect");
  } catch (e) {
    console.log("error in database  connection", e);
    process.exit(1);
  }
}

export default connectToDb;
