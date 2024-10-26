import express from "express";
import { getProduct, deleteProduct, getAllProduct, updateProduct } from "../controllers/productController.js";

const app = express.Router();

app.get("/", getAllProduct);
app.post("/", getProduct);
app.delete("/:id", deleteProduct);
app.put("/:id", updateProduct);

export default app