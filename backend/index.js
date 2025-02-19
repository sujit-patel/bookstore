import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:5173", 
  "https://bookstore-git-main-sujit-patels-projects.vercel.app" 
];
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};
connectDB();

// Routes
app.use("/api/book", bookRoute);
app.use("/api/user", userRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
