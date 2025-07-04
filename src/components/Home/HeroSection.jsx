import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const coverImages = ["/pic/c1.jpeg", "/pic/c2.jpg", "/pic/cover%20pic%203.jpg"];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coverImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{
        background: "black",
      }}
    >
      {/* Optimized background image transition with no gaps */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            opacity: { duration: 0.8 },
          }}
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${coverImages[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform, opacity",
          }}
        />
      </AnimatePresence>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

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
          className="text-7xl md:text-9xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tripura <span className="text-amber-500">Craft</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Threads & Treasures from North East
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
