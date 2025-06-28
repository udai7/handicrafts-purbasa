import React from "react";
import { FaStar, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ArtisanCard = ({ artisan, highlighted }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/artisans/${id}`);
  };
  const {
    id = "1",
    name = "Maya Sharma",
    image = "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    location = "Jaipur, Rajasthan",
    rating = 4.8,
    reviewCount = 127,
    specialty = "Block Printing",
    shortBio = "Third-generation artisan specializing in traditional Rajasthani block printing techniques using natural dyes.",
    featured = true,
    productCount = 24,
  } = artisan || {};

  // Extract city for Google Maps (use last part after comma, or fallback to location)
  let city = location;
  if (location && location.includes(",")) {
    const parts = location.split(",");
    city = parts[parts.length - 1].trim();
    // If city is too generic (like 'Delhi Haat'), fallback to last part
    if (city.toLowerCase().includes("delhi haat")) {
      city = "New Delhi";
    }
  }
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    city
  )}`;

  return (
    <div className="relative">
      {highlighted && (
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-200 to-blue-100 opacity-70 blur-sm"></div>
      )}
      <div
        className={`overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ${
          highlighted ? "ring-4 ring-blue-200 ring-inset scale-105 z-20" : ""
        }`}
      >
        {/* Artisan image with gradient overlay */}
        <div className="relative h-48">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-2">
            <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
          </div>

          <div className="mb-3">
            <span className="inline-flex items-center text-xs text-gray-700">
              <FaMapMarkerAlt className="mr-2 text-red-400" size={18} />
              {location}
            </span>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-md transition-colors duration-300"
          >
            View Store
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;
