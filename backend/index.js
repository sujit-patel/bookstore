import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.md_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));

//define route
app.get("/", (req, res) => {
    res.send("Book Store app running");
});

app.use("/book", bookRoute)

app.listen(PORT, () => {
    console.log(`Your server is running at http://localhost:${PORT}`);
});

