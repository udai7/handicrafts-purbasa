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
      <div className="bg-gray-50 min-h-screen pt-20 relative overflow-hidden">
        {/* Watermark background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/pic/em.jpg"
            alt="Watermark"
            className="pointer-events-none select-none w-full h-full object-cover opacity-10 mix-blend-multiply"
            style={{ filter: "blur(1px)" }}
          />
        </div>
        {/* Cover Image at the Top */}
        <div className="relative w-full h-64 md:h-80 z-10">
          <img
            src="/pic/pp.jpg"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        {/* CM Images Section */}
        <div className="relative z-10 flex flex-col items-center mt-8 mb-8">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-row justify-center gap-8 mb-2 w-full">
              {["manik.jpg", "m3.jpeg", "m2.jpeg"].map((img, idx) => {
                let caption = "Honorable CM Tripura";
                if (idx === 1) caption = "Honorable Secretary THHCL";
                if (idx === 2) caption = "Honorable Chairman THHCL";
                return (
                  <div key={img} className="flex flex-col items-center">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border-2 border-gray-200 bg-white flex items-center justify-center">
                      <img
                        src={`/pic/${img}`}
                        alt={caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="mt-3 text-lg font-semibold font-cursive text-gray-800">
                      {caption}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Large About Heading */}
        <div className="relative z-10 flex flex-col items-center mt-8 mb-8">
          <h1
            className="text-9xl font-bold font-cursive"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            About
          </h1>
        </div>
        {/* About Texts Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-8">
          <div>
            <h2
              className="text-3xl font-bold text-center mb-4 font-cursive"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Purbasha's History
            </h2>
            <p className="text-lg text-center text-gray-700">
              Purbasha Tripura is the official handicrafts brand of the
              Government of Tripura, dedicated to preserving and promoting the
              state's rich artisanal heritage. With a diverse collection that
              spans handloom textiles, bamboo and cane products, traditional
              jewelry, and ethnic pickles (achaar), Purbasha represents the
              heart of Tripura's cultural identity. Every product sold under
              Purbasha is handcrafted by local artisans, many of whom are part
              of Self-Help Groups (SHGs) and tribal communities, ensuring both
              authenticity and social impact. With over 6 stores across India,
              Purbasha connects artisans to markets while supporting sustainable
              rural livelihoods.
            </p>
          </div>
          <div>
            <h2
              className="text-2xl font-bold text-center mb-3 font-cursive"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Tripura Handloom: A Tapestry of Tradition and Culture
            </h2>
            <p className="text-base text-center text-gray-700">
              Tripura, nestled in the northeast of India, is a land rich in
              cultural heritage and traditional crafts. Among its many artistic
              expressions, handloom weaving stands out as a timeless emblem of
              the state's indigenous identity. Rooted deeply in the customs of
              the tribal and non-tribal communities of the region, Tripura's
              handloom sector reflects not only artistic excellence but also a
              source of livelihood for thousands.
            </p>
          </div>
          <div>
            <h3
              className="text-xl font-bold text-center mb-2 font-cursive"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              A Living Heritage
            </h3>
            <p className="text-base text-center text-gray-700">
              The art of handloom weaving in Tripura has been passed down
              through generations, especially among the tribal communities such
              as the Reangs, Lushais, and Tripuris. Each community has developed
              its unique motifs, patterns, and techniques that are rich in
              symbolism and tradition. Women, in particular, play a vital role
              in the weaving process, often using loin looms (also known as
              backstrap looms) — a portable and indigenous type of loom that
              gives the weaver complete control over the design and weave.
            </p>
          </div>
          <div>
            <h3
              className="text-xl font-bold text-center mb-2 font-cursive"
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              Distinctive Designs and Products
            </h3>
            <p className="text-base text-center text-gray-700 mb-2">
              Tripura's handloom is known for its vibrant colors, geometrical
              patterns, and eco-friendly materials. The fabrics often feature
              traditional designs like rignai, rihamp, and kamchwlwi borok,
              which hold cultural significance.
            </p>
            <p className="text-base text-center text-gray-700 mb-2">
              Handloom products from the state include:
            </p>
            <ul className="list-disc list-inside text-base text-gray-700 mx-auto max-w-lg">
              <li>
                Traditional garments like rignai (wraparound skirts), risa
                (breast cloth), and rikutu (upper body wrap)
              </li>
              <li>Elegant stoles, scarves, shawls, and dupattas</li>
              <li>
                Contemporary home décor items such as cushion covers, curtains,
                and table runners
              </li>
            </ul>
          </div>
        </div>
        {/* Achievements Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl font-bold text-center mb-6 font-cursive"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Achievements
          </h2>
          <ul className="space-y-4">
            {artisan.awards.map((award, idx) => (
              <li
                key={idx}
                className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between border border-gray-100"
              >
                <span className="font-semibold text-blue-700 text-lg">
                  {award.title}
                </span>
                <span className="text-gray-500 text-sm">
                  {award.organization} &middot; {award.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
