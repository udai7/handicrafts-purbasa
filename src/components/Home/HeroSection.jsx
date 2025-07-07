import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const coverImages = ["/pic/c1.jpeg", "/pic/c2.jpg", "/pic/cover%20pic%203.jpg"];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Preload all images
    coverImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setPrevImage(coverImages[currentImage]);
      setCurrentImage((prev) => (prev + 1) % coverImages.length);
      setIsTransitioning(true);

      // Reset the transition flag after the animation duration
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // match fade duration
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      style={{ background: "black" }}
    >
      {/* Previous Image (fade out) */}
      {isTransitioning && prevImage && (
        <motion.div
          key={prevImage}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${prevImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
          }}
        />
      )}

      {/* Current Image (fade in) */}
      <motion.div
        key={coverImages[currentImage]}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${coverImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
        }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Decorative Blurred Circles */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-40 flex flex-col items-center text-center text-white">
        {/* Label */}
        <motion.div
          className="bg-white border border-gray-200 text-black px-4 py-1 rounded-full text-sm font-medium mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Handcrafted with passion
        </motion.div>

        {/* Title */}
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
