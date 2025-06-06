// import express from "express";
// import cors from "cors";
// import { connectDB } from "./DB/Database.js";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";
// import transactionRoutes from "./Routers/Transactions.js";
// import userRoutes from "./Routers/userRouter.js";

// dotenv.config({ path: "./.env" });
// const app = express();

// //const port = process.env.PORT;
// const port = process.env.PORT || 5000; // Default to 5000 if PORT is not set

// connectDB();

// // Middleware
// app.use(express.json());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://spend-wise-ao1m.vercel.app"], // Allow all origins
//     credentials: true, // if you need to send cookies or other credentials
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
// app.use(bodyParser.json());
// app.use(helmet());
// app.use(morgan("common"));

// // Routes
// app.use("/api/transactions", transactionRoutes);
// app.use("/api/auth", userRoutes);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });






import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";

dotenv.config({ path: "./.env" });
const app = express();

const port = process.env.PORT || 5000;

connectDB();

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:3000", "https://spend-wise-ao1m.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions), (req, res) => {
  console.log("Received OPTIONS request for:", req.path);
  res.status(200).send();
});

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("common"));

// Routes
app.use("/api/transactions", transactionRoutes);
app.use("/api/auth", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});