import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ArtisanProfiles from "./pages/ArtisanProfiles";
import Cart from "./components/Cart/Cart";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./components/Dashboard/AdminDasboard";
import Layout from "./Layout";
import Weaving from "./components/Category/Weaving";
import Achaar from "./components/Category/Achaar";
import Bamboo from "./components/Category/Bamboo";
import Jewelry from "./components/Category/Jewelry";
import Textiles from "./components/Category/Textiles";
import ProductDetail from "./components/Product/ProductDetails";
import ArtisanProfile from "./components/Artisan/ArtisanProfile";
import { UserContext } from "./utils/user_context";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AboutUs from "./pages/about";
import App2 from "../Admin-Frontend/src/App";
import Wishlist from "./pages/Wishlist";
import Handicrafts from "./components/Category/Weaving";
import MyProfile from "./pages/MyProfile";
import MyOrders from "./pages/MyOrders";

axios.defaults.withCredentials = true;

function AppContent() {
  const [user, setUser] = useState({});
  const link = import.meta.env.VITE_BACKEND_LINK;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${link}/api/auth/check-auth`);
        if (response.data.success) {
          setUser(response.data.user);
        }
      } catch (err) {
        // No navigation to login
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/weaving" element={<Weaving />} />
        <Route path="/category/achaar" element={<Achaar />} />
        <Route path="/category/bamboo" element={<Bamboo />} />
        <Route path="/category/jewelry" element={<Jewelry />} />
        <Route path="/category/textiles" element={<Textiles />} />
        <Route path="/category/handicrafts" element={<Handicrafts />} />
        <Route path="/artisans" element={<ArtisanProfiles />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/artisans/:id" element={<ArtisanProfile />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/admin-panel/*" element={<App2 />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
    </UserContext.Provider>
  );
}

function App1() {
  return <AppContent />;
}

export default App1;
