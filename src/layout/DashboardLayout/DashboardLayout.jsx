import React from "react";
import Header from "../../components/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
        <Header></Header>
      <div className="drawer lg:drawer-open">
        <input id="my-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content md:p-10">
          {/* Page content here */}
          <Outlet></Outlet>
          
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-dashboard"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/all-users">All Users</Link>
            </li>
            <li>
              <Link to='/dashboard/add-service'>Add Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
