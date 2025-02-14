// import mongoose from "mongoose";

// export const connectDB = async (req, res) => {
//     const db = process.env.MONGO_URL;

//     const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

//     console.log(`MongoDB Connected to ${connection.host}`);

// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const db = process.env.MONGO_URL;

    const connection = await mongoose.connect(db);
    console.log(`MongoDB Connected to ${connection.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit with failure
  }
};
