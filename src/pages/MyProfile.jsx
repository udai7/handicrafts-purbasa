import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import FeaturedProducts from "../components/Home/FeaturedProducts";

const mockOrders = [
  {
    id: 1,
    name: "Wooden Water Bottle",
    image: "/public/pic/2.jpg",
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
    image: "/public/pic/6.jpg",
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
    image: "/public/pic/5.jpg",
    price: 14.99,
    rating: 4.5,
    reviewCount: 21,
    tag: "Jewelry",
    status: "Processing",
    badge: "Current Order",
  },
];

export default function MyProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, City, Country",
    contact: "+1234567890",
    profilePic: "/public/pic/nigga.jpg",
    bio: "Craft lover, supporting artisans and handmade treasures!",
  });
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, profilePic: URL.createObjectURL(file) }));
    }
  };

  const handleSave = () => {
    setProfile(form);
    setEditMode(false);
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-28 pb-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="relative">
              <img
                src={form.profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-amber-400 shadow-lg"
              />
              {editMode && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePicChange}
                  className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
                  title="Change profile picture"
                />
              )}
            </div>
            <div className="flex-1">
              <div className="mb-2">
                <label className="block font-semibold text-gray-700">
                  Name:
                </label>
                {editMode ? (
                  <input
                    className="border p-2 rounded w-full"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="text-lg font-bold text-gray-900">
                    {profile.name}
                  </span>
                )}
              </div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-700">
                  Email:
                </label>
                <span className="text-gray-600">{profile.email}</span>
              </div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-700">
                  Address:
                </label>
                {editMode ? (
                  <input
                    className="border p-2 rounded w-full"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="text-gray-600">{profile.address}</span>
                )}
              </div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-700">
                  Contact:
                </label>
                {editMode ? (
                  <input
                    className="border p-2 rounded w-full"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="text-gray-600">{profile.contact}</span>
                )}
              </div>
              <div className="mb-2">
                <label className="block font-semibold text-gray-700">
                  Bio:
                </label>
                {editMode ? (
                  <textarea
                    className="border p-2 rounded w-full"
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                  />
                ) : (
                  <span className="text-gray-600">{profile.bio}</span>
                )}
              </div>
              <div className="mt-4">
                {editMode ? (
                  <>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-300 px-4 py-2 rounded"
                      onClick={() => setEditMode(false)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded shadow"
                    onClick={() => setEditMode(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="border-t pt-0 mt-8">
            <FeaturedProducts
              heading="Your Orders"
              subheading="Order History & Status"
              description="See your previous and current orders, track their status, and relive your favorite purchases."
              buttonText="Shop More"
              products={mockOrders}
              gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
