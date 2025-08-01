import React, { useContext, useState, useEffect } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  addtowishlist,
  removefromwishlist,
  fetchwishlist,
} from "../../utils/wishlist";
import { toast } from "react-toastify";
import { UserContext } from "../../utils/user_context";
import { memo } from "react";
import { Heart, ShoppingCart } from "lucide-react";

const ProductListing = memo(({ product }) => {
  const { user } = useContext(UserContext);
  const [isfav, setIsFav] = useState(false);
  const navigate = useNavigate();

  // Fetch initial wishlist status
  useEffect(() => {
    const fetchWishlistStatus = async () => {
      if (!user?.id) return;
      try {
        const resp = await fetchwishlist(user.id);
        const wishlistItems = Array.isArray(resp) ? resp : resp.items || [];
        setIsFav(
          wishlistItems.some((item) => item.productId === product.productId)
        );
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      }
    };

    fetchWishlistStatus();
  }, [user?.id, product.productId]);

  // Handle product navigation
  const handleProductClick = () => {
    navigate(`/product/${product.productId}`);
  };

  // Toggle wishlist
  const toggleWishlist = async (e) => {
    e.stopPropagation();
    try {
      if (isfav) {
        await removefromwishlist(user.id, product.productId);
        toast.info("Removed from wishlist");
        setIsFav(false);
      } else {
        await addtowishlist(user.id, product.productId);
        toast.success("Added to wishlist");
        setIsFav(true);
      }
    } catch (err) {
      toast.error("Failed to update wishlist");
      console.error("Wishlist error:", err);
    }
  };

  // Add to cart handler
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(user.id, product.productId, 1)
      .then(() => {
        // Show a success message (optional)
        toast.success(`${product.title} added to cart`);
        // Navigate to cart page after adding to cart
        navigator("/cart");
      })
      .catch((error) => {
        // Handle any errors
        toast.error("Failed to add item to cart");
        console.error("Error adding to cart:", error);
      });
  };

  return (
    <div
      className="group relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
      onClick={handleProductClick}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full transition duration-500 ease-out transform group-hover:scale-110"
        />

        {/* Featured Badge */}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            Featured
          </span>
        )}

        {/* Wishlist Toggle */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 h-8 w-8 bg-white bg-opacity-80 backdrop-blur-sm hover:bg-amber-50 rounded-full flex items-center justify-center shadow-sm transition-colors z-10"
          title={isfav ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart
            size={16}
            className={`transition-colors ${
              isfav
                ? "text-red-500 fill-red-500"
                : "text-gray-500 hover:text-red-500"
            }`}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 truncate pr-2">
            {product.title}
          </h3>
          <div className="flex items-center text-amber-500">
            <FaStar className="mr-1" />
            <span className="text-sm font-medium">{product.rating || 0}</span>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold text-amber-600">
            ₹{(product.price * 83).toLocaleString()}
          </span>
          {product.discountPercentage && (
            <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

ProductListing.displayName = "ProductListing";

export default ProductListing;
