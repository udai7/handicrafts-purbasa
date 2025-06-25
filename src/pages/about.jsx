import React, { useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import ProductCard from "../components/Product/ProductCard";
import { Tab } from "@headlessui/react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  // Hardcoded artisan data for the About page
  const artisan = {
    name: "Purbasha",
    profileImage:
      "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    coverImage:
      "https://images.unsplash.com/photo-1516554646385-7642248096d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    location: "Agartala, Tripura",
    phone: "+91 98765 43210",
    email: "maya.Purbasha.com",
    website: "www.Purbasha.com",
    socialMedia: {
      instagram: "Purbasha_handicrafts",
      facebook: "PurbashaHandicrafts",
      twitter: "Purbasha_crafts",
    },
    rating: 4.8,
    reviewCount: 127,
    specialty: "Block Printing",
    craftType: [
      "Handicrafts",
      "Bamboo Products",
      "Textiles",
      "Achaar",
      "Jewelry",
    ],
    yearStarted: 1974,
    bio: "Purbasha Tripura is the official handicrafts brand of the Government of Tripura, dedicated to preserving and promoting the state's rich artisanal heritage. With a diverse collection that spans handloom textiles, bamboo and cane products, traditional jewelry, and ethnic pickles (achaar), Purbasha represents the heart of Tripura's cultural identity. Every product sold under Purbasha is handcrafted by local artisans, many of whom are part of Self-Help Groups (SHGs) and tribal communities, ensuring both authenticity and social impact. With over 6 stores across India, Purbasha connects artisans to markets while supporting sustainable rural livelihoods.",
    story:
      "Purbasha was established in 1974 as an initiative by the Tripura Handicrafts Development Corporation Ltd. to showcase and support the indigenous crafts of Tripura. In the early days, artisans from remote tribal areas had little access to fair trade opportunities. Purbasha became a bridge between their craft and the broader national market. Over the years, it has evolved into a symbol of tradition, empowerment, and craftsmanship. Whether it's a handloom woven Rignai or a finely carved bamboo lamp, each product carries the legacy of generations of skilled hands. Today, Purbasha continues to support artisans through training, exhibitions, and modern retail platforms.",
    awards: [
      {
        year: 2015,
        title: " National Award for Handicrafts Marketing",
        organization: "Ministry of Textiles",
      },
      {
        year: 2019,
        title: " Best State Handloom & Handicrafts Brand ",
        organization: "India Craft Summit",
      },
      {
        year: 2021,
        title: " UNESCO Seal of Excellence  ",
        organization: "UNESCO",
      },
    ],
    products: [
      {
        id: "p1",
        name: "Cotton Sarees",
        price: 2500,
        image: "cc.webp",
      },
      {
        id: "p2",
        name: "Indigo Dyed Scarf",
        price: 1200,
        image: "ww.webp",
      },
      {
        id: "p3",
        name: "Hand-Crafted Necklace",
        price: 1800,
        image: "j4.jpg",
      },
      {
        id: "p4",
        name: "Bamboo Candle Stand",
        price: 1600,
        image: "bp2.webp",
      },
    ],
    gallery: [
      "/Purbasha1.jpg",
      "/Purbasha2.jpg",
      "/Purbasha3.jpg",
      "/Purbasha4.jpg",
      "/Purbasha5.jpg",
      "/Purbasha6.jpg",
      "/Purbasha7.jpg",
      "/Purbasha8.jpg",
      "/Handicrafts.jpg",
      "/pottery.jpg",
      "/Bamboo.jpg",
      "/Textiles.jpg",
      "/Achaar.jpg",
      "/j1.jpg",
      "/j2.jpg",
      "/j3.jpg",
      "/j4.jpg",
      "/j5.jpg",
      "/w1.jpeg",
      "/w2.jpeg",
      "/w3.jpg",
      "/w4.jpeg",
      "/w5.jpg",
      "/w6.jpg",
      "/a3.jpeg",
      "/a4.jpeg",
      "/a5.jpeg",
      "/a6.jpeg",
      "/bambooproducts1.jpg",
      "/bamboo1 (1).jpeg",
      "/bamboo1 (1).jpg",
      "/bamboo1 (2).jpg",
      "/bamboo1 (3).jpg",
      "/bamboo-handicraft-1.avif",
    ],
    reviews: [
      {
        id: "r1",
        user: "Priya M.",
        rating: 5,
        date: "May 12, 2023",
        comment:
          "Beautiful craftsmanship and colors! The bedsheet I ordered exceeded my expectations.",
      },
      {
        id: "r2",
        user: "Rahul K.",
        rating: 4,
        date: "April 3, 2023",
        comment: "High quality products and fast shipping. Would recommend!",
      },
      {
        id: "r3",
        user: "Sarah J.",
        rating: 5,
        date: "March 18, 2023",
        comment:
          "I love supporting traditional artisans. Maya's work is exceptional and authentic.",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-20">
        {/* Cover Image */}
        <div className="relative h-64 md:h-80 w-full">
          <img
            src="/Purbasha2.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row">
                {/* Profile Image */}
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <img
                    src={artisan.profileImage}
                    alt={artisan.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
                  />
                </div>

                {/* Profile Info */}
                <div className="md:ml-6 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {artisan.name}
                    </h1>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="font-medium">{artisan.rating}</span>
                      <span className="text-gray-500 ml-1">
                        ({artisan.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 mb-2">
                      <FaMapMarkerAlt className="mr-2 text-gray-500" />
                      <span>{artisan.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {artisan.craftType.map((craft, index) => (
                        <span
                          key={index}
                          className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {craft}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      Artisan since {artisan.yearStarted}
                    </div>
                  </div>

                  {/* Contact & Social */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600">
                      <FaPhoneAlt className="mr-2 text-gray-500" />
                      <span>{artisan.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaEnvelope className="mr-2 text-gray-500" />
                      <span>{artisan.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaGlobe className="mr-2 text-gray-500" />
                      <span>{artisan.website}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <a
                        href={`https://instagram.com/${artisan.socialMedia.instagram}`}
                        className="text-pink-600 hover:text-pink-700"
                      >
                        <FaInstagram className="text-xl" />
                      </a>
                      <a
                        href={`https://facebook.com/${artisan.socialMedia.facebook}`}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <FaFacebook className="text-xl" />
                      </a>
                      <a
                        href={`https://twitter.com/${artisan.socialMedia.twitter}`}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        <FaTwitter className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
              <Tab.List className="flex border-t border-gray-200">
                <Tab
                  className={({ selected }) =>
                    `py-4 px-6 text-sm font-medium focus:outline-none transition-colors
                  ${
                    selected
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                  }
                >
                  About
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `py-4 px-6 text-sm font-medium focus:outline-none transition-colors
                  ${
                    selected
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                  }
                >
                  Products
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `py-4 px-6 text-sm font-medium focus:outline-none transition-colors
                  ${
                    selected
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                  }
                >
                  Gallery
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `py-4 px-6 text-sm font-medium focus:outline-none transition-colors
                  ${
                    selected
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`
                  }
                >
                  Reviews
                </Tab>
              </Tab.List>

              <Tab.Panels>
                {/* About Panel */}
                <Tab.Panel className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h2 className="text-xl font-semibold mb-4">Bio</h2>
                      <p className="text-gray-700 mb-6">{artisan.bio}</p>

                      <h2 className="text-xl font-semibold mb-4">
                        Purbasha's History
                      </h2>
                      <p className="text-gray-700">{artisan.story}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">
                        Awards & Recognition
                      </h2>
                      <div className="space-y-4">
                        {artisan.awards.map((award, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-indigo-500 pl-4 py-2"
                          >
                            <div className="font-medium">{award.title}</div>
                            <div className="text-sm text-gray-600">
                              {award.organization}, {award.year}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>

                {/* Products Panel */}
                <Tab.Panel className="p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Products by {artisan.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {artisan.products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </Tab.Panel>
                {/* Gallery Panel */}
                <Tab.Panel className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {artisan.gallery.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="rounded-lg shadow-md object-cover w-full h-40"
                      />
                    ))}
                  </div>
                </Tab.Panel>
                {/* Reviews Panel */}
                <Tab.Panel className="p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Customer Reviews
                  </h2>
                  <div className="space-y-6">
                    {artisan.reviews.map((review) => (
                      <div
                        key={review.id}
                        className="bg-gray-100 rounded-lg p-4 shadow-sm"
                      >
                        <div className="flex items-center mb-2">
                          <FaStar className="text-yellow-400 mr-1" />
                          <span className="font-medium text-gray-800 mr-2">
                            {review.user}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {review.date}
                          </span>
                        </div>
                        <div className="text-gray-700">{review.comment}</div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
