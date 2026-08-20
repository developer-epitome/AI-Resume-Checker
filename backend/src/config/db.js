const mongoose = require("mongoose")
const env = require("./env");

mongoose.set("strictQuery", true);


// async function connectDB(){
//     const conn = await mongoose.connect(env.mongoUri, { 
//       serverSelectionTimeoutMS: 10_000,
//       family: 4,
//     });
//     console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);

//     mongoose.connection.on("error", (err) => {
//        console.error("MongoDB error:", err.message);
//     });
//     mongoose.connection.on("disconnected", () => {
//         console.warn("MongoDB di connected"); 
//     });
// }



let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}



async function connectDB() {
  // Reuse an existing connection
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // Reuse an existing connection attempt
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(env.mongoUri, {
        serverSelectionTimeoutMS: 10_000,
        family: 4,
      })
      .then((mongooseInstance) => {
        console.log(
          `MongoDB connected: ${mongooseInstance.connection.host}/${mongooseInstance.connection.name}`
        );

        return mongooseInstance;
      })
      .catch((err) => {
        cached.promise = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}


mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});



module.exports = { connectDB };