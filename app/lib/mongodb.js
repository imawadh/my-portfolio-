import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://imawadh:nPDu4vVvV5H9PjmJ@cluster0.uldh5k4.mongodb.net/portfolio?appName=Cluster0";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
