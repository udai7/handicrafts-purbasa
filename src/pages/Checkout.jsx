import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { FaCog, FaTruck, FaShippingFast, FaCheckCircle } from "react-icons/fa";

const MOCK_CART_ITEMS = [
  {
    id: "1",
    name: "Handcrafted Achaar Vase",
    image: "/public/weaving.png",
    price: 49.99,
    quantity: 2,
    artisan: "Asha Achaar",
  },
  {
    id: "2",
    name: "Bamboo Basket Set",
    image: "/public/Bg.jpg",
    price: 29.99,
    quantity: 1,
    artisan: "Bamboo Crafts Co.",
  },
  {
    id: "3",
    name: "Artisan Textile Scarf",
    image: "/public/image.png",
    price: 39.99,
    quantity: 3,
    artisan: "Textile Weavers",
  },
  {
    id: "4",
    name: "Handwoven Jewelry Box",
    image: "/public/logo.png",
    price: 59.99,
    quantity: 1,
    artisan: "Jewelry Artisans",
  },
];

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems?.length
    ? location.state.cartItems
    : MOCK_CART_ITEMS;
  const subtotal =
    location.state?.subtotal ||
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 100 ? 0 : 20;
  const taxRate = 0.07;
  const tax = subtotal * taxRate;
  const total = subtotal + shippingCost + tax;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed! (Demo)");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24 pb-10 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-8">
          {/* Order Status Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-0 sm:gap-6">
              {/* Processing */}
              <div className="flex flex-col items-center">
                <div className="bg-amber-500 text-white rounded-full p-3 shadow-lg mb-2">
                  <FaCog size={24} />
                </div>
                <span className="text-amber-700 font-semibold">Processing</span>
              </div>
              {/* Line */}
              <div className="hidden sm:block h-1 w-12 bg-amber-400 mx-2 rounded"></div>
              {/* Shipped */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 text-gray-400 rounded-full p-3 mb-2">
                  <FaTruck size={24} />
                </div>
                <span className="text-gray-400 font-semibold">Shipped</span>
              </div>
              <div className="hidden sm:block h-1 w-12 bg-gray-200 mx-2 rounded"></div>
              {/* Out for Delivery */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 text-gray-400 rounded-full p-3 mb-2">
                  <FaShippingFast size={24} />
                </div>
                <span className="text-gray-400 font-semibold">
                  Out for Delivery
                </span>
              </div>
              <div className="hidden sm:block h-1 w-12 bg-gray-200 mx-2 rounded"></div>
              {/* Delivered */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 text-gray-400 rounded-full p-3 mb-2">
                  <FaCheckCircle size={24} />
                </div>
                <span className="text-gray-400 font-semibold">Delivered</span>
              </div>
            </div>
          </div>

          {/* Address & Contact Form */}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Country</label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition text-lg"
              >
                Place Order
              </button>
            </div>
          </form>

          {/* Divider and spacing */}
          <div className="my-10 flex items-center justify-center">
            <div className="h-0.5 w-2/3 bg-amber-100 rounded"></div>
          </div>

          {/* Purchased Products Section */}
          <div className="mt-12 bg-amber-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Purchased Products
            </h2>
            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center py-6 gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg shadow"
                  />
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 text-sm flex items-center mt-1">
                          by {item.artisan}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          Quantity:{" "}
                          <span className="font-semibold text-gray-700">
                            {item.quantity}
                          </span>
                        </p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        <span className="text-xl font-bold text-amber-600">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Order Summary */}
            <div className="mt-8 bg-white rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center shadow">
              <div className="text-lg text-gray-700 font-semibold mb-2 sm:mb-0">
                Subtotal:{" "}
                <span className="text-gray-900">${subtotal.toFixed(2)}</span>{" "}
                &nbsp; | &nbsp; Shipping:{" "}
                <span className="text-gray-900">
                  {shippingCost === 0 ? "Free" : `$${shippingCost}`}
                </span>{" "}
                &nbsp; | &nbsp; Tax:{" "}
                <span className="text-gray-900">${tax.toFixed(2)}</span>
              </div>
              <div className="text-2xl font-bold text-amber-700">
                Total: ${total.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
