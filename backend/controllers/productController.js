import mongoose from "mongoose";
import productModel from "../models/productModel.js";

const getAllProduct = async (req, res) => {
  try {
    const product = await productModel.find();
    res.status(200).json({ sucess: true, data: product });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, message: `server error: ${error.message}` });
  }
};

const getProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ sucess: false, message: "Please Provide All Fields" });
  }

  try {
    const product = await productModel.create({ name, price, image });
    res.status(200).json({ sucess: true, data: product });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, message: `server error: ${error.message}` });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ sucess: false, message: "invalid user ID" });
  }

  try {
    const product = await productModel.findByIdAndDelete(id);
    res.status(200).json({ sucess: true, message: "delete sucessfull" });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, message: `server error: ${error.message}` });
  }
};

const updateProduct = async (req, res) => {
  const { name, image, price } = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ sucess: false, message: "invalid user ID" });
  }

  try {
    const product = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, product });
  } catch (error) {
    res
      .status(500)
      .json({ sucess: false, message: `server error: ${error.message}` });
  }
};

export { getProduct, deleteProduct, getAllProduct, updateProduct };
