import mongoose from "mongoose";
let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if the database is already connected, then don't connect again
  if (connected) {
    console.log("Mongo DB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (e) {
    console.log(e);
  }
};
export default connectDB;
