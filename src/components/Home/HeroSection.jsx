import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/Bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative Elements - Reduced number and simplified */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-40 flex flex-col items-center text-center text-white">
        {/* Handcrafted Label */}
        <motion.div
          className="bg-white border border-gray-200 text-black px-4 py-1 rounded-full text-sm font-medium mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Handcrafted with passion
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Traditions <span className="text-amber-600">Crafted</span> Culture
          Delivered
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the rich heritage of Tripura through handcrafted wonders made
          by local artisans. Support tradition, shop authentic—directly from the
          heart of the Northeast.
        </motion.p>

        {/* Buttons with Animations */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Shop Button with Amber Theme */}
          <Link
            to="/shop"
            className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
          >
            View Products
          </Link>

          {/* Artisans Button with Simpler Effect */}
          <Link
            to="/artisans"
            className="bg-white/80 border border-amber-200 text-gray-900 px-8 py-4 text-lg font-semibold rounded-full shadow-sm transition-all duration-200 hover:bg-white"
          >
            Visit Shops
          </Link>
        </motion.div>

        {/* Featured Crafts Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {["Achaar", "Handicrafts", "Textiles", "Jewelry", "Bamboo"].map(
            (craft) => (
              <Link
                key={craft}
                to={`/category/${craft.toLowerCase()}`}
                className="bg-white/70 border border-amber-100 text-gray-800 px-4 py-1 rounded-full text-sm hover:bg-amber-100 transition-colors"
              >
                {craft}
              </Link>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
