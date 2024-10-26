import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./createPage.css";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreatePage() {
  const navigate = useNavigate();
  const notify = (msg) => {
    toast(msg)
  }
  const [state, setState] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(state);
    try {
      const res = await axios.post("http://localhost:5000/api/product", state);
      navigate("/");
      notify(res);
    } catch (error) {
      console.error(error.message);
      notify(res);
    }
  };

  const handleChange = (e, name) => {
    setState((state) => ({
      ...state,
      [name]: e.target.value,
    }));
  };

  return (
    <>
      <Outlet />

      <div className="create">
        <div className="create-container">
          <h1>Create Product</h1>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="productName"
              placeholder="Enter Product Name"
              value={state.name}
              onChange={(e) => handleChange(e, "name")}
              name="name"
            />
            <input
              type="tel"
              className="productPrice"
              placeholder="Enter Product Price"
              value={state.price}
              onChange={(e) => handleChange(e, "price")}
              name="price"
            />
            <input
              type="text"
              className="productImage"
              placeholder="Enter Product Image Link"
              value={state.image}
              onChange={(e) => handleChange(e, "image")}
              name="image"
            />
            <input type="submit" value="Create Product" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
