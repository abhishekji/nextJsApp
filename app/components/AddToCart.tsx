"use client";

import React from "react";

const AddToCart = () => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      onClick={() => alert("Cart addition will be added later")}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
