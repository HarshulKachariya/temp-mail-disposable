import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const uri = process.env.MONGODB_URI;
let mongooseConnection: Promise<typeof mongoose>;

declare global {
  // eslint-disable-next-line no-var
  var _mongooseConnection: Promise<typeof mongoose> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongooseConnection) {
    global._mongooseConnection = mongoose.connect(uri);
  }
  mongooseConnection = global._mongooseConnection;
} else {
  mongooseConnection = mongoose.connect(uri);
}

export default mongooseConnection;
