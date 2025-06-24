import React, { useState, useEffect, useContext, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchwishlist, removefromwishlist } from "../utils/wishlist";
import { UserContext } from "../utils/user_context";
import { toast } from "react-toastify";
import { HeartOff, Star } from "lucide-react";
import Layout from "../Layout";
import ProductListing from "../components/Product/ProductCard";
import { addToCart } from "../utils/Cart"; // Import addToCart function
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const MOCK_PRODUCTS = [
  {
    productId: "1",
    title: "Bamboo candle Stand",
    image: "/public/bp2.webp",
    price: 49.99,
    rating: 4.8,
    featured: true,
    discountPercentage: 10,
  },
  {
    productId: "2",
    title: "Bamboo Pen Stand",
    image: "/public/bp.webp",
    price: 29.99,
    rating: 4.6,
    featured: false,
    discountPercentage: 15,
  },
  {
    productId: "3",
    title: "Cotton Saree",
    image: "/public/cc.webp",
    price: 39.99,
    rating: 4.9,
    featured: true,
    discountPercentage: 20,
  },
  {
    productId: "4",
    title: "Necklace and Earring Set",
    image: "/public/j4.jpg",
    price: 59.99,
    rating: 4.7,
    featured: false,
    discountPercentage: 5,
  },
];

const Wishlist = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.id) {
      setIsLoading(false);
      return;
    }

    const getWishlist = async () => {
      try {
        const response = await fetchwishlist(user.id);
        setWishlist(Array.isArray(response) ? response : []);
      } catch (error) {
        toast.error("Could not load your wishlist");
      } finally {
        setIsLoading(false);
      }
    };

    getWishlist();
  }, [user?.id]);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await removefromwishlist(user.id, productId);
      toast.success("Item removed from wishlist");
      setWishlist((prevWishlist) =>
        prevWishlist.filter((item) => item.productId !== productId)
      );
    } catch (error) {
      toast.error("Could not remove item from wishlist");
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <div className="text-center text-lg text-gray-700">
            Loading wishlist...
          </div>
        </div>
      </div>
    );
  }

  // Always show a full wishlist for demo/design
  const displayWishlist = wishlist.length === 0 ? MOCK_PRODUCTS : wishlist;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center py-10 pt-24">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Wishlist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayWishlist.map((product, index) => (
              <motion.div
                key={product.productId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group flex flex-col"
              >
                <ProductListing product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
