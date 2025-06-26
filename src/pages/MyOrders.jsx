import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import OrderStatusBar from "../components/Order/OrderStatusBar";
import OrderStatusProduct from "../components/Order/OrderStatusProduct";

const mockOrders = [
  {
    id: 1,
    name: "Wooden Water Bottle",
    image: "/pic/2.jpg",
    price: 29.99,
    rating: 4.7,
    reviewCount: 32,
    tag: "Handicrafts",
    status: "Delivered",
    badge: "Past Order",
  },
  {
    id: 2,
    name: "Bamboo Necklace and Earrings",
    image: "/pic/6.jpg",
    price: 24.99,
    rating: 4.8,
    reviewCount: 17,
    tag: "Jewelry",
    status: "Shipped",
    badge: "Current Order",
  },
  {
    id: 3,
    name: "Wooden Necklace and Earrings",
    image: "/pic/5.jpg",
    price: 14.99,
    rating: 4.5,
    reviewCount: 21,
    tag: "Jewelry",
    status: "Processing",
    badge: "Current Order",
  },
  {
    id: 4,
    name: "Mango Pickle",
    image: "/a4.jpeg",
    price: 59.99,
    rating: 4.7,
    reviewCount: 19,
    tag: "Achaar",
    status: "Pending",
    badge: "Current Order",
  },
];

export default function MyOrders() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-4xl font-bold mb-6 text-amber-600 text-center">
            My Orders
          </h2>
          <OrderStatusProduct product={mockOrders[0]} />
          <OrderStatusBar status={mockOrders[0].status} />
          <FeaturedProducts
            heading="All Your Orders"
            subheading="Order History & Status"
            description="Browse all your previous and current orders, track their status, and relive your favorite purchases."
            buttonText="Shop More"
            products={mockOrders}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
