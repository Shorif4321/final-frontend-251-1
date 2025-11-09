import React, { useContext } from "react";
import Header from "../../components/Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../context/UserContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
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
              <NavLink
                to="/dashboard/my-bookings"
                className={({ isActive }) =>
                  `px-2 py-1 transition-colors ${
                    isActive
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-600"
                  }`
                }
              >
                My Bookings
              </NavLink>
            </li>
            {isAdmin && (
              <>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/all-users"
                    className={({ isActive }) =>
                      `px-2 py-1 transition-colors ${
                        isActive
                          ? "border-b-2 border-primary text-primary"
                          : "text-gray-600"
                      }`
                    }
                  >
                    All Users
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/add-service"
                    className={({ isActive }) =>
                      `px-2 py-1 transition-colors ${
                        isActive
                          ? "border-b-2 border-primary text-primary"
                          : "text-gray-600"
                      }`
                    }
                  >
                    Add Service
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/manage-specialist"
                    className={({ isActive }) =>
                      `px-2 py-1 transition-colors ${
                        isActive
                          ? "border-b-2 border-primary text-primary"
                          : "text-gray-600"
                      }`
                    }
                  >
                    Manage Service
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
