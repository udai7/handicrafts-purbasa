import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import { AdminContext } from "../utils/admin_context";

const defaultAdmin = {
  userName: "Demo Admin",
  email: "demo@artisan.com",
  id: "demo-id",
};

const DashboardPage = () => {
  const [admin, setAdmin] = useState(defaultAdmin);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden ml-64">
          {/* Header */}
          <Header />

          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </AdminContext.Provider>
  );
};

export default DashboardPage;
