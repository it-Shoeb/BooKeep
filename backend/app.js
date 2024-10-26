import express from "express";
import connectDB from "./config/mongodb-connect.js";
import cors from "cors";
const app = express();

import dotenv from "dotenv";
import productRoute from "./routes/productRoute.js";
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/product", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server started at http://localhost:${process.env.PORT}`);
  connectDB();
});
