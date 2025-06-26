import React from "react";

export default function OrderStatusProduct({ product }) {
  if (!product) return null;
  const statusColors = {
    Processing: "bg-orange-100 text-orange-700 border-orange-300",
    Shipped: "bg-blue-100 text-blue-700 border-blue-300",
    "Out for Delivery": "bg-yellow-100 text-yellow-700 border-yellow-300",
    Delivered: "bg-green-100 text-green-700 border-green-300",
  };
  return (
    <div className="flex flex-col items-center mb-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 rounded-xl object-cover shadow-md mb-3 border-2 border-gray-200"
      />
      <div className="text-lg font-semibold text-gray-800 mb-1">
        {product.name}
      </div>
      <span
        className={`px-3 py-1 rounded-full border text-sm font-medium ${
          statusColors[product.status] ||
          "bg-gray-100 text-gray-500 border-gray-300"
        }`}
      >
        {product.status}
      </span>
    </div>
  );
}
