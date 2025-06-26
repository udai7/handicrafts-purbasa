import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../Product/productCard1";
import fetch_products from "../../utils/products";

const Achaar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [achaarProducts, setAchaarProducts] = useState([]);
  const [featuredArtisans, setFeaturedArtisans] = useState([]);

  // Sample data - in a real app, this would come from an API
  useEffect(() => {
    setFeaturedArtisans([
      {
        id: 1,
        name: "Terra Ceramics",
        image: "https://www.goodnet.org/photos/620x0/42756_hd.jpg",
        location: "Kyoto, Japan",
        specialty: "Traditional Japanese Achaar",
        bio: "Master ceramicists with over five generations of experience crafting traditional Japanese stoneware.",
        productCount: 18,
      },
      {
        id: 2,
        name: "Clay Studio",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFFrCeNNH5798vaKNiAFT-THikqN6iP_79w&s",
        location: "Portland, USA",
        specialty: "Contemporary functional Achaar",
        bio: "Artist collective specializing in modern designs that balance aesthetic beauty and everyday functionality.",
        productCount: 12,
      },
      {
        id: 3,
        name: "Garden Achaar",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy1yq23uMfsJUZObYc-OBNH-gQpg9ZnO4Cg&s",
        location: "Valencia, Spain",
        specialty: "Terracotta garden accessories",
        bio: "Family workshop using traditional Mediterranean techniques to create durable and beautiful terracotta pieces.",
        productCount: 15,
      },
    ]);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    const fetchTextileProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch_products();
        let filtered = response.filter((p) => p.category === "Achaar");
        // If no Achaar products from API, use fallback
        if (filtered.length === 0) {
          filtered = [
            {
              _id: "achaar1",
              title: "Tripuri Mixed Achaar",
              image: "/a3.jpeg",
              price: 199,
              rating: 4.8,
              featured: true,
              discountPercentage: 10,
            },
            {
              _id: "achaar2",
              title: "Spicy Mango Pickle",
              image: "/a4.jpeg",
              price: 179,
              rating: 4.7,
              featured: true,
              discountPercentage: 15,
            },
            {
              _id: "achaar3",
              title: "Traditional Mixed Veg Achaar",
              image: "/a5.jpeg",
              price: 149,
              rating: 4.6,
              featured: true,
              discountPercentage: 5,
            },
          ];
        }
        setAchaarProducts(filtered);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching textile products:", error);
      }
    };

    fetchTextileProducts();
  }, []);

  const achaarTechniques = [
    {
      name: "Fermented",
      description:
        "Ingredients like dried fish (berma), bamboo shoot, or leafy greens are fermented naturally over days or weeks.",
      image:
        "https://media.istockphoto.com/id/1147402081/photo/top-view-of-hands-with-clay-making-of-a-ceramic-pot-on-the-Achaar-wheel-hobby-and-leisure.jpg?s=612x612&w=0&k=20&c=vh5HDGUN0Xr7UAtz4yrNyPEMaeArZQswp26iJuaXZDg=",
    },
    {
      name: "Spiced",
      description:
        "Fresh ingredients like roselle leaves or green mango are mixed directly with salt, turmeric, mustard seeds, and oil for instant curing.",
      image:
        "https://media.istockphoto.com/id/1144440788/photo/woman-hand-working-on-pot.jpg?s=612x612&w=0&k=20&c=0Cj4nIlKumIINr_jz-ORWoHf5XczCTktjx5RH4cE3Ak=",
    },
    {
      name: "Sun-Dried",
      description:
        "Vegetables, fish, or herbs are sun-dried to remove moisture, then preserved in mustard oil with spices.",
      image:
        "https://media.istockphoto.com/id/1171178824/photo/glassblower-in-the-work.jpg?s=612x612&w=0&k=20&c=9PmmZetkx_Ra1xZHiThzFgl09Um9Yoi3H3vF6-GrVyM=",
    },
  ];

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse space-y-8">
            <div className="h-80 bg-amber-200/30 rounded-xl"></div>
            <div className="h-10 w-1/4 bg-amber-200/30 rounded-md"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl h-80 shadow-sm"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url(/Achaar.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-orange-900/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center">
          {/* Handcrafted Label */}
          <motion.div
            className="bg-amber-100/20 border border-amber-100/30 text-amber-50 px-4 py-1 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ancient Craftsmanship
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white"
          >
            Bold Taste <span className="text-amber-100">Tripuri Roots</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-amber-50/90 max-w-2xl mb-10"
          >
            Discover exquisite handcrafted achaars from the heart of Tripura,
            each jar packed with bold flavors, indigenous ingredients, and
            generations of tradition.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#achaar-products"
              className="bg-gradient-to-r from-amber-200 to-amber-100 text-amber-900 px-8 py-4 text-lg font-semibold rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
            >
              Explore Products
            </a>
            <Link
              to="/artisans?craft=achaar"
              className="bg-white/20 border border-amber-100/30 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-sm transition-all duration-200 hover:bg-white/30"
            >
              Visit Shops
            </Link>
          </motion.div>
          {/* Featured Techniques Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {achaarTechniques.map((technique) => (
              <Link
                key={technique.name}
                to={`/techniques/${technique.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="bg-white/20 border border-amber-100/30 text-amber-50 px-4 py-1 rounded-full text-sm hover:bg-amber-100/30 transition-colors"
              >
                {technique.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured Products */}
      <section id="achaar-products" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900">
              Featured Best Pickle
            </h2>
            <Link
              to="/shop?category=achaar"
              className="flex items-center text-amber-600 hover:text-amber-700 font-medium"
            >
              View All <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achaarProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achaar Techniques */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              className="bg-amber-500/10 border border-amber-500/20 text-amber-700 px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Traditional Methods
            </motion.div>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">
              Achaar Creation Techniques
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover exquisite handcrafted achaars from the heart of Tripura,
              each jar packed with bold flavors, indigenous ingredients, and
              generations of tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achaarTechniques.map((technique, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={technique.image}
                  alt={technique.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">
                    {technique.name}
                  </h3>
                  <p className="text-gray-700">{technique.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Box */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-amber-100 rounded-xl p-8 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="bg-amber-100/20 p-4 rounded-lg w-full md:w-auto">
                <Info className="w-12 h-12 text-amber-600" strokeWidth={1.5} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  Preserving Achaar Heritage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Each jar of our Tripuri achaar tells a story of cultural
                      heritage, crafted using age-old recipes and traditional
                      techniques passed down through generations. Made with 100%
                      locally sourced ingredients and preserved through natural
                      fermentation and sun-curing methods, our pickles contain
                      no artificial preservatives or additives.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>100% locally sourced ingredients</li>
                      <li>Traditional fermentation and sun-curing methods</li>
                      <li>No artificial preservatives or additives</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We uphold strict quality standards while embracing
                      regional flavors and encouraging artisanal innovation.
                      Every purchase directly supports indigenous communities
                      and helps preserve Tripura's rich, yet endangered,
                      culinary traditions—one flavorful jar at a time.
                    </p>
                    <div className="flex gap-4">
                      <Link
                        to="/sustainability"
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                      >
                        Our Sustainability Promise
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 pt-8 border-t border-amber-100"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { label: "Achaar Varities", value: "12+" },
                  { label: "Years of Tradition", value: "100+" },
                  { label: "Unique Techniques", value: "8" },
                  { label: "Community Members", value: "240+" },
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-amber-50/50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Join the Achaar Community Section */}
      <section className="py-20 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-amber-50 mb-4"
            >
              Join the Achaar Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-amber-100 max-w-2xl mx-auto"
            >
              Subscribe to receive exclusive recipes, artisan stories, and
              special offers from our Tripuri achaar makers.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-amber-100/30 text-amber-50 placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-100/50"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-200 to-amber-100 text-amber-900 font-semibold hover:shadow-lg transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-amber-200/80 text-sm mt-4 text-center">
              Join our community of food enthusiasts and artisanal achaar
              lovers.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Achaar;
