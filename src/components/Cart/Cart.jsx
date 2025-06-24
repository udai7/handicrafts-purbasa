import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaShoppingBasket,
  FaGift,
  FaTags,
  FaMapMarkerAlt,
  FaHeart,
  FaShieldAlt,
  FaTruck,
  FaTag,
  FaPercentage,
} from "react-icons/fa";
import { fetchCart, updateCart, removeFromCart } from "../../utils/Cart";
import { UserContext } from "../../utils/user_context";
import { useContext } from "react";
import { toast } from "react-toastify";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const MOCK_CART_ITEMS = [
  {
    id: "1",
    productId: "1",
    name: "Bamboo candle Stand",
    image: "/public/bp2.webp",
    price: 49.99,
    quantity: 2,
    artisan: "Asha Achaar",
  },
  {
    id: "2",
    productId: "2",
    name: "Bamboo Pen Stand",
    image: "/public/bp.webp",
    price: 29.99,
    quantity: 1,
    artisan: "Bamboo Crafts Co.",
  },
  {
    id: "3",
    productId: "3",
    name: "Cotton Saree",
    image: "/public/cc.webp",
    price: 39.99,
    quantity: 3,
    artisan: "Textile Weavers",
  },
  {
    id: "4",
    productId: "4",
    name: "Necklace and Earring Set",
    image: "/public/j4.jpg",
    price: 59.99,
    quantity: 1,
    artisan: "Jewelry Artisans",
  },
];

const Cart = () => {
  const { user, setUser } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const shippingCost = subtotal > 100 ? 0 : 20;
  const taxRate = 0.07;
  const navigate = useNavigate();

  useEffect(() => {
    const getCart = async () => {
      try {
        setLoading(true);
        const data = await fetchCart(user.id);
        // If cart is empty, use mock data for demo
        const cartData =
          Array.isArray(data) && data.length > 0 ? data : MOCK_CART_ITEMS;
        setCartItems(cartData);
        const total = Array.isArray(cartData)
          ? cartData.reduce((sum, item) => sum + item.price * item.quantity, 0)
          : 0;
        setSubtotal(total);
      } catch (error) {
        toast.error("Failed to load cart. Please try again.");
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) getCart();
    else {
      // If no user, show mock cart for demo
      setCartItems(MOCK_CART_ITEMS);
      setSubtotal(
        MOCK_CART_ITEMS.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )
      );
      setLoading(false);
    }
  }, [user.id]);

  const tax = (subtotal - discount) * taxRate;

  // Calculate total
  const total = subtotal - discount + shippingCost + tax;

  const updateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 0) return;

    try {
      if (newQuantity === 0) {
        await removeFromCart(user.id, itemId);
        toast.success("Item removed from cart");
      } else {
        await updateCart(user.id, itemId, newQuantity);
        toast.success("Cart updated");
      }

      const updatedData = await fetchCart(user.id);
      setCartItems(updatedData);

      const total = Array.isArray(updatedData)
        ? updatedData.reduce((sum, item) => sum + item.price * item.quantity, 0)
        : 0;
      setSubtotal(total);
    } catch (error) {
      toast.error("Failed to update cart. Please try again.");
      console.error("Error updating cart:", error);
    }
  };

  // Remove item from cart
  const removeItem = async (itemId) => {
    try {
      await removeFromCart(user.id, itemId);
      setCartItems(cartItems.filter((item) => item.productId !== itemId));
      toast.success("Item removed from cart");

      // Update subtotal after removing item
      const updatedSubtotal = cartItems
        .filter((item) => item.productId !== itemId)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);
      setSubtotal(updatedSubtotal);
    } catch (error) {
      toast.error("Failed to remove item. Please try again.");
      console.error("Error removing item:", error);
    }
  };

  const clearCart = async () => {
    try {
      // This would require a backend endpoint to clear the entire cart
      // For now, we'll remove each item individually
      for (const item of cartItems) {
        await removeFromCart(user.id, item.productId);
      }
      setCartItems([]);
      setSubtotal(0);
      toast.success("Cart cleared");
    } catch (error) {
      toast.error("Failed to clear cart. Please try again.");
      console.error("Error clearing cart:", error);
    }
  };

  const applyCoupon = () => {
    if (!couponCode.trim()) {
      toast.warning("Please enter a coupon code");
      return;
    }

    // Mock coupon logic - in a real app, this would validate against the backend
    if (couponCode.toUpperCase() === "WELCOME10") {
      const discountAmount = subtotal * 0.1; // 10% discount
      setDiscount(discountAmount);
      toast.success("Coupon applied: 10% discount");
    } else if (couponCode.toUpperCase() === "ARTISAN25") {
      const discountAmount = subtotal * 0.25; // 25% discount
      setDiscount(discountAmount);
      toast.success("Coupon applied: 25% discount");
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const moveToWishlist = (item) => {
    // Mock implementation - would need actual wishlist functionality
    removeItem(item.productId);
    toast.success(`${item.name} moved to your wishlist`);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center py-10 pt-24">
          <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
            <div className="text-center text-lg text-gray-700">
              Loading your cart...
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center py-10 pt-24">
        <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="flex-1 bg-white rounded-2xl shadow-2xl p-8 flex flex-col min-h-[500px]">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <FaShoppingBasket className="mr-3 text-amber-500" />
                My Cart
              </h1>
              <p className="text-gray-500">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
              </p>
            </div>

            {cartItems.length === 0 ? null : (
              <div className="space-y-6 flex-1">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center bg-gray-50 rounded-xl shadow p-4 hover:shadow-md transition mb-2"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg mr-6 mb-4 sm:mb-0"
                    />
                    {/* Product Info */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 hover:text-amber-600 transition cursor-pointer">
                            {item.name}
                          </h3>
                          <p className="text-gray-500 text-sm flex items-center mt-1">
                            <FaMapMarkerAlt className="text-amber-500 mr-2" />
                            {item.artisan}
                          </p>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <span className="text-xl font-bold text-gray-900">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                          >
                            <FaMinus size={12} className="text-gray-600" />
                          </button>
                          <span className="font-medium text-gray-800 px-2">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                          >
                            <FaPlus size={12} className="text-gray-600" />
                          </button>
                        </div>
                        <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                          <span className="font-semibold text-gray-700">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => moveToWishlist(item)}
                            className="text-gray-400 hover:text-amber-500 transition"
                            title="Save for later"
                          >
                            <FaHeart />
                          </button>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="text-gray-400 hover:text-red-500 transition"
                            title="Remove item"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 flex flex-col h-fit self-start">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Discount</span>
                <span className="text-green-600">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery</span>
                <span>{shippingCost === 0 ? "Free" : `$${shippingCost}`}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-lg text-gray-900">
                  Total
                </span>
                <span className="font-bold text-2xl text-amber-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Promo code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
              <button
                onClick={applyCoupon}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-lg font-semibold transition"
              >
                Apply
              </button>
            </div>
            <button
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl shadow-lg transition mb-4 text-lg"
              onClick={() =>
                navigate("/checkout", { state: { cartItems, subtotal } })
              }
            >
              Proceed to Checkout
            </button>
            <div className="flex items-center justify-center mb-2">
              <span className="text-gray-400 text-sm">or pay with</span>
            </div>
            <button className="w-full flex items-center justify-center border border-gray-200 rounded-xl py-2 bg-white hover:bg-gray-50 transition">
              <img src="/images/paypal.svg" alt="PayPal" className="h-6" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
