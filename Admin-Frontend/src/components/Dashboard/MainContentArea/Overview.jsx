import React, { useState } from "react";
import {
  CreditCard,
  Package,
  Truck,
  Users,
  TrendingUp,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Download,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Sector,
} from "recharts";

const Overview = () => {
  const [timePeriod, setTimePeriod] = useState("month");
  const [selectedCategory, setSelectedCategory] = useState("Handicrafts");

  const salesData = [
    { name: "Jan", sales: 4000, orders: 240 },
    { name: "Feb", sales: 3000, orders: 198 },
    { name: "Mar", sales: 5000, orders: 305 },
    { name: "Apr", sales: 2780, orders: 189 },
    { name: "May", sales: 6890, orders: 409 },
    { name: "Jun", sales: 7390, orders: 480 },
    { name: "Jul", sales: 9490, orders: 570 },
  ];

  const salesDataByCategory = {
    Handicrafts: [
      { name: "Jan", sales: 4000 },
      { name: "Feb", sales: 3000 },
      { name: "Mar", sales: 5000 },
      { name: "Apr", sales: 2780 },
      { name: "May", sales: 6890 },
      { name: "Jun", sales: 7390 },
      { name: "Jul", sales: 9490 },
    ],
    Jewelry: [
      { name: "Jan", sales: 2000 },
      { name: "Feb", sales: 1800 },
      { name: "Mar", sales: 2500 },
      { name: "Apr", sales: 1780 },
      { name: "May", sales: 2890 },
      { name: "Jun", sales: 3390 },
      { name: "Jul", sales: 4490 },
    ],
    Textiles: [
      { name: "Jan", sales: 1500 },
      { name: "Feb", sales: 1200 },
      { name: "Mar", sales: 1700 },
      { name: "Apr", sales: 980 },
      { name: "May", sales: 1890 },
      { name: "Jun", sales: 2390 },
      { name: "Jul", sales: 3490 },
    ],
    Pickle: [
      { name: "Jan", sales: 1000 },
      { name: "Feb", sales: 900 },
      { name: "Mar", sales: 1200 },
      { name: "Apr", sales: 780 },
      { name: "May", sales: 990 },
      { name: "Jun", sales: 1390 },
      { name: "Jul", sales: 1490 },
    ],
  };

  const categoryData = [
    { name: "Handicrafts", value: 35 },
    { name: "Pickle", value: 25 },
    { name: "Textiles", value: 20 },
    { name: "Jewelry", value: 20 },
  ];

  const COLORS = ["#6366F1", "#F59E42", "#10B981", "#F43F5E"];

  // Stats cards data with growth indicators
  const statsCards = [
    {
      title: "Total Orders",
      value: "1,234",
      growth: 12.5,
      icon: <Package className="text-blue-700" size={24} />,
      cardColor: "bg-blue-100",
    },
    {
      title: "Completed Deliveries",
      value: "1,000",
      growth: 8.2,
      icon: <Truck className="text-green-700" size={24} />,
      cardColor: "bg-green-100",
    },
    {
      title: "Total Revenue",
      value: "₹41,00,000",
      growth: -3.5,
      icon: <CreditCard className="text-red-700" size={24} />,
      cardColor: "bg-red-100",
    },
    {
      title: "Active Products",
      value: "150",
      growth: 5.7,
      icon: <Users className="text-yellow-700" size={24} />,
      cardColor: "bg-yellow-100",
    },
  ];

  // Recent orders dummy data (INR)
  const recentOrders = [
    {
      id: "#OR-7891",
      customer: "Emma Thompson",
      status: "Completed",
      amount: 23450,
      date: "15 Mar 2025",
    },
    {
      id: "#OR-7892",
      customer: "Michael Chen",
      status: "Processing",
      amount: 12999,
      date: "14 Mar 2025",
    },
    {
      id: "#OR-7893",
      customer: "Sarah Williams",
      status: "Shipped",
      amount: 34900,
      date: "13 Mar 2025",
    },
    {
      id: "#OR-7894",
      customer: "John Martinez",
      status: "Pending",
      amount: 8975,
      date: "12 Mar 2025",
    },
  ];

  // Helper to format INR currency
  const formatINR = (amount) => `₹${amount.toLocaleString("en-IN")}`;

  // Status color mapping
  const statusColors = {
    Completed: "bg-green-100 text-green-800",
    Processing: "bg-blue-100 text-blue-800",
    Shipped: "bg-purple-100 text-purple-800",
    Pending: "bg-amber-100 text-amber-800",
  };

  // Button color mapping for categories
  const categoryButtonColors = {
    Handicrafts: "bg-yellow-400 hover:bg-yellow-500",
    Jewelry: "bg-purple-400 hover:bg-purple-500",
    Textiles: "bg-blue-400 hover:bg-blue-500",
    Pickle: "bg-orange-400 hover:bg-orange-500",
  };

  // Mock data for top selling products by category (5 products each)
  const topSellingProducts = {
    Handicrafts: [
      { name: "Bamboo Lamp", id: "H001", stock: 12, amount: 4999 },
      { name: "Handmade Vase", id: "H002", stock: 8, amount: 2999 },
      { name: "Wooden Tray", id: "H003", stock: 20, amount: 1999 },
      { name: "Decorative Plate", id: "H004", stock: 15, amount: 1599 },
      { name: "Carved Elephant", id: "H005", stock: 10, amount: 3499 },
    ],
    Jewelry: [
      { name: "Silver Necklace", id: "J001", stock: 5, amount: 2999 },
      { name: "Beaded Bracelet", id: "J002", stock: 15, amount: 999 },
      { name: "Gold Earrings", id: "J003", stock: 7, amount: 3999 },
      { name: "Pearl Ring", id: "J004", stock: 9, amount: 2499 },
      { name: "Gemstone Pendant", id: "J005", stock: 6, amount: 2799 },
    ],
    Textiles: [
      { name: "Cotton Saree", id: "T001", stock: 10, amount: 1999 },
      { name: "Wool Shawl", id: "T002", stock: 6, amount: 2499 },
      { name: "Silk Scarf", id: "T003", stock: 18, amount: 1499 },
      { name: "Linen Kurta", id: "T004", stock: 13, amount: 1799 },
      { name: "Embroidered Dupatta", id: "T005", stock: 11, amount: 1299 },
    ],
    Pickle: [
      { name: "Mango Pickle", id: "P001", stock: 30, amount: 499 },
      { name: "Lemon Pickle", id: "P002", stock: 25, amount: 399 },
      { name: "Mixed Pickle", id: "P003", stock: 40, amount: 599 },
      { name: "Chili Pickle", id: "P004", stock: 22, amount: 299 },
      { name: "Garlic Pickle", id: "P005", stock: 18, amount: 349 },
    ],
  };

  // Top selling products graph data: use product names and sales
  const topSellingGraphData = {
    Handicrafts: [
      { name: "Bamboo Lamp", sales: 120 },
      { name: "Handmade Vase", sales: 90 },
      { name: "Wooden Tray", sales: 150 },
    ],
    Jewelry: [
      { name: "Silver Necklace", sales: 110 },
      { name: "Beaded Bracelet", sales: 70 },
      { name: "Gold Earrings", sales: 100 },
    ],
    Textiles: [
      { name: "Cotton Saree", sales: 70 },
      { name: "Wool Shawl", sales: 50 },
      { name: "Silk Scarf", sales: 80 },
    ],
    Pickle: [
      { name: "Mango Pickle", sales: 60 },
      { name: "Lemon Pickle", sales: 40 },
      { name: "Mixed Pickle", sales: 70 },
    ],
  };

  const [topSellingPeriod, setTopSellingPeriod] = useState("6months");

  // Helper for stock badge color
  const getStockBadgeClass = (stock) => {
    if (stock >= 15) return "bg-green-100 text-green-800 border-green-200";
    if (stock >= 6) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-red-100 text-red-800 border-red-200";
  };

  // Bar colors for top selling products
  const topSellingBarColors = ["#22c55e", "#eab308", "#ef4444"]; // green, yellow, red

  // Line colors for sales trend by category
  const salesTrendLineColors = {
    Handicrafts: "#a78bfa", // purple
    Jewelry: "#fb923c", // orange
    Textiles: "#60a5fa", // blue
    Pickle: "#fde047", // yellow
  };

  // Mock data for current vs previous month sales for each product in each category
  const monthlySalesComparison = {
    Handicrafts: [
      { name: "Bamboo Lamp", current: 80, previous: 65 },
      { name: "Handmade Vase", current: 55, previous: 60 },
      { name: "Wooden Tray", current: 100, previous: 90 },
      { name: "Decorative Plate", current: 70, previous: 75 },
      { name: "Carved Elephant", current: 45, previous: 50 },
    ],
    Jewelry: [
      { name: "Silver Necklace", current: 40, previous: 35 },
      { name: "Beaded Bracelet", current: 30, previous: 25 },
      { name: "Gold Earrings", current: 50, previous: 45 },
      { name: "Pearl Ring", current: 28, previous: 30 },
      { name: "Gemstone Pendant", current: 32, previous: 29 },
    ],
    Textiles: [
      { name: "Cotton Saree", current: 25, previous: 20 },
      { name: "Wool Shawl", current: 18, previous: 15 },
      { name: "Silk Scarf", current: 30, previous: 28 },
      { name: "Linen Kurta", current: 22, previous: 20 },
      { name: "Embroidered Dupatta", current: 19, previous: 17 },
    ],
    Pickle: [
      { name: "Mango Pickle", current: 60, previous: 55 },
      { name: "Lemon Pickle", current: 45, previous: 40 },
      { name: "Mixed Pickle", current: 70, previous: 65 },
      { name: "Chili Pickle", current: 38, previous: 35 },
      { name: "Garlic Pickle", current: 29, previous: 28 },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <button
          className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition font-semibold text-base shadow"
          style={{ minWidth: "170px" }}
        >
          <Download className="w-5 h-5" />
          Download Report
        </button>
      </div>

      {/* Time period buttons removed as requested */}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className={`${card.cardColor} rounded-xl shadow-sm overflow-hidden`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-lg ${
                    card.cardColor === "bg-blue-100"
                      ? "bg-blue-200"
                      : card.cardColor === "bg-green-100"
                      ? "bg-green-200"
                      : card.cardColor === "bg-red-100"
                      ? "bg-red-200"
                      : card.cardColor === "bg-yellow-100"
                      ? "bg-yellow-200"
                      : ""
                  }`}
                >
                  {card.icon}
                </div>
                <span
                  className={`flex items-center text-sm font-medium ${
                    card.growth >= 0 ? "text-gray-700" : "text-gray-700"
                  }`}
                >
                  {card.growth >= 0 ? (
                    <ArrowUpRight size={16} className="mr-1 text-gray-700" />
                  ) : (
                    <ArrowDownRight size={16} className="mr-1 text-gray-700" />
                  )}
                  {Math.abs(card.growth)}%
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {card.title}
              </h3>
              <p className="text-3xl font-bold mt-1 text-gray-900">
                {card.value}
              </p>
              {card.revenue && (
                <p className="text-sm text-gray-700 mt-1">
                  Revenue:{" "}
                  <span className="font-semibold">
                    ₹{card.revenue.toLocaleString()}
                  </span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-6 my-6">
        {Object.keys(salesDataByCategory).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-white text-lg font-bold rounded-2xl px-10 py-5 shadow-md transition-all duration-200 focus:outline-none
              ${categoryButtonColors[cat]} 
              ${
                selectedCategory === cat
                  ? "ring-4 ring-white scale-105"
                  : "opacity-90 hover:opacity-100"
              }`}
            style={{ minWidth: "180px", minHeight: "64px" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Top Selling Products and Stock Table Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Top Selling Products Graph */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Top Selling Products
            </h3>
            <select
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              value={topSellingPeriod}
              onChange={(e) => setTopSellingPeriod(e.target.value)}
            >
              <option value="6months">Last 6 months</option>
              <option value="3months">Last 3 months</option>
            </select>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topSellingGraphData[selectedCategory]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Bar dataKey="sales" radius={[4, 4, 0, 0]}>
                  {(() => {
                    const data = topSellingGraphData[selectedCategory];
                    if (!data) return null;
                    // Sort sales values descending and map to color
                    const sorted = [...data]
                      .map((d, i) => ({ ...d, idx: i }))
                      .sort((a, b) => b.sales - a.sales);
                    const colorMap = {};
                    if (sorted[0]) colorMap[sorted[0].name] = "#22c55e"; // green
                    if (sorted[1]) colorMap[sorted[1].name] = "#eab308"; // yellow
                    if (sorted[2]) colorMap[sorted[2].name] = "#ef4444"; // red
                    return data.map((entry, idx) => (
                      <Cell
                        key={`cell-${idx}`}
                        fill={colorMap[entry.name] || "#6366F1"}
                      />
                    ));
                  })()}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Product Stock Table */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {selectedCategory} Stock Availability
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-3 font-medium">Product Name</th>
                  <th className="pb-3 font-medium">Product ID</th>
                  <th className="pb-3 font-medium">Stock Left</th>
                  <th className="pb-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {topSellingProducts[selectedCategory].map((product, idx) => (
                  <tr key={idx} className="text-gray-800">
                    <td className="py-3 pr-4">{product.name}</td>
                    <td className="py-3 pr-4">{product.id}</td>
                    <td className="py-3 pr-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStockBadgeClass(
                          product.stock
                        )}`}
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-3">₹{product.amount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Trend Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Sales Trend</h3>
            <div className="flex items-center text-gray-500">
              <TrendingUp size={16} className="mr-1" />
              <span className="text-sm">+12.5% from last period</span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={salesDataByCategory[selectedCategory]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke={salesTrendLineColors[selectedCategory] || "#6366F1"}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Product Categories
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({
                    name,
                    percent,
                    x,
                    y,
                    cx,
                    cy,
                    midAngle,
                    outerRadius,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const radius = outerRadius + 24;
                    const xPos = cx + radius * Math.cos(-midAngle * RADIAN);
                    const yPos = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                      <text
                        x={xPos}
                        y={yPos}
                        fill="#333"
                        textAnchor={xPos > cx ? "start" : "end"}
                        dominantBaseline="central"
                        fontSize={16}
                        fontWeight="bold"
                      >
                        {`${name} ${(percent * 100).toFixed(0)}%`}
                      </text>
                    );
                  }}
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Orders Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Recent Orders
            </h3>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="text-gray-800">
                    <td className="py-3 pr-4">{order.id}</td>
                    <td className="py-3 pr-4">{order.customer}</td>
                    <td className="py-3 pr-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          statusColors[order.status]
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3">{formatINR(order.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders by Month */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Orders by Month - {selectedCategory}
            </h3>
            <div className="flex items-center text-gray-500">
              <Calendar size={16} className="mr-1" />
              <span className="text-sm">Last 6 months</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={salesDataByCategory[selectedCategory]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Bar
                  dataKey={
                    salesDataByCategory[selectedCategory][0]?.orders !==
                    undefined
                      ? "orders"
                      : "sales"
                  }
                  fill="#6366F1"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Current vs Previous Month Sales Comparison */}
      <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Current Month vs Previous Month Sales - {selectedCategory}
        </h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlySalesComparison[selectedCategory]}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar
                dataKey="current"
                fill="#6366F1"
                name="Current Month"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="previous"
                fill="#22c55e"
                name="Previous Month"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Overview;
