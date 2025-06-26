import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";

const FeaturedProducts = ({
  heading = "Best Deal of the Day",
  subheading = "Handcrafted With Love",
  description = "Unique treasures handpicked from our most talented artisans, each telling a story of tradition and craftsmanship.",
  buttonText = "View All Products",
  products = [],
  gridClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8",
  showStrikethrough = true,
}) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Enhanced ProductCard component with more features
  const EnhancedProductCard = ({ product }) => {
    const isHovered = hoveredProduct === product.id;

    // Calculate previous price if not provided
    const previousPrice =
      product.previousPrice || (product.price * 1.2).toFixed(2);

    return (
      <div
        className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden"
        onMouseEnter={() => setHoveredProduct(product.id)}
        onMouseLeave={() => setHoveredProduct(null)}
      >
        {/* Product Image with Badge */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-110"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {product.badge}
            </div>
          )}

          {/* Quick actions overlay - appears on hover */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 flex-grow flex flex-col">
          {/* Category/Tag */}
          <div className="text-amber-600 text-xs font-medium mb-2">
            {product.tag}
          </div>

          {/* Product Name */}
          <h3 className="text-gray-800 font-bold text-lg mb-1 hover:text-amber-600 transition-colors">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>

          {/* Ratings */}
          <div className="flex items-center mb-3">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "text-amber-500"
                      : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-xs ml-2">
              ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price and Add to Cart */}
          <div className="mt-auto flex items-center justify-between w-full">
            <div className="flex flex-col items-start">
              {showStrikethrough && (
              <span className="text-gray-500 line-through mr-2">
                ₹{(previousPrice * 83).toLocaleString()}
              </span>
              )}
              <span className="text-lg font-bold text-amber-600">
                ₹{(product.price * 83).toLocaleString()}
              </span>
            </div>
            <button className="bg-amber-100 text-amber-700 hover:bg-amber-600 hover:text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with decorative elements */}
        <div className="relative mb-16">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-amber-200 opacity-20 text-9xl font-serif z-0">
            ✧
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <span className="text-amber-600 font-medium tracking-wider uppercase text-sm mb-2 block">
                {subheading}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {heading}
              </h2>
              <p className="text-gray-600 max-w-lg">{description}</p>
            </div>

            {/* Enhanced View All Button */}
            <Link
              to="/shop"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 font-bold text-amber-600 shadow-md transition duration-300 ease-out border border-amber-200 hover:border-amber-500"
            >
              <span className="absolute inset-0 flex h-full w-full justify-center rounded-full bg-amber-600 text-white translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"></span>
              <span className="relative flex items-center transition duration-300 group-hover:text-white">
                {buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid ${gridClass}`}>
          {products.map((product) => (
            <EnhancedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
