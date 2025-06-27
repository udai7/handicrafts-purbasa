import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Overview from "./components/Dashboard/MainContentArea/Overview";
import OrdersList from "./components/Dashboard/MainContentArea/Orders/OrdersList";
import OrderDetails from "./components/Dashboard/MainContentArea/Orders/OrderDetails";
import DeliveriesList from "./components/Dashboard/MainContentArea/Deliveries/DeliveriesList";
import DeliveryDetails from "./components/Dashboard/MainContentArea/Deliveries/DeliveryDetails";
import PaymentsList from "./components/Dashboard/MainContentArea/Payments/PaymentsList";
import PaymentDetails from "./components/Dashboard/MainContentArea/Payments/PaymentDetails";
import ArtisansManagement from "./components/Dashboard/MainContentArea/ArtisansManagement";
import AddProduct from "./components/Dashboard/MainContentArea/products/add_product";
import ProductList from "./components/Dashboard/MainContentArea/products/your_products";
import Reviews from "./components/Dashboard/MainContentArea/products/reviews";

const App2 = () => {
  return (
    <Routes>
      {/* Dashboard Routes */}
      <Route path="dashboard" element={<DashboardPage />}>
        <Route index element={<Overview />} />
        <Route path="orders" element={<OrdersList />} />
        <Route path="orders/:orderId" element={<OrderDetails />} />
        <Route path="deliveries" element={<DeliveriesList />} />
        <Route path="deliveries/:deliveryId" element={<DeliveryDetails />} />
        <Route path="payments" element={<PaymentsList />} />
        <Route path="payments/:paymentId" element={<PaymentDetails />} />
        <Route path="artisans" element={<ArtisansManagement />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="products" element={<ProductList />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      {/* Redirect unknown admin routes to dashboard */}
      <Route
        path="*"
        element={<Navigate to="/admin-panel/dashboard" replace />}
      />
    </Routes>
  );
};

export default App2;
