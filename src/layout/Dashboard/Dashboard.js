import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 p-3 gap-3">
      <Sidebar className="col-span-2 fixed h-screen bg-indigo-200 rounded-lg overflow-y-auto p-5" />
      <div className="col-span-10 w-full bg-gray-100 rounded-lg overflow-y-scroll p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
