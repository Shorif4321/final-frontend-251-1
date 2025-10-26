import React, { useContext, useState } from "react";
import logo from "../../../assets/images/logo.png";
import man from "../../../assets/icons/man.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContext";

const Header = () => {
  const { user, logOut, deleteTheUser } = useContext(AuthContext);
  // console.log(user);

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <header>
      <div className="navbar justify-between bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuItems}

              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">{user?.displayName}</a>
                    </li>
                    <li>
                      <a>{user?.email}</a>
                    </li>
                    <li>
                      <a onClick={deleteTheUser}> Delete Account</a>
                    </li>
                    <li>
                      <a onClick={logOut}>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/sign-in">
                  <div className="w-10 p-2 px-3 border-2 border-gray-300 rounded-full p-0">
                    <img src={man} alt="man" />
                  </div>
                </Link>
              )}
            </ul>
          </div>
          <Link to="/" className="text-xl">
            <img src={logo} alt="medi site" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 items-center">
            {menuItems}
          </ul>

          {/* ====== drop dawn depend on user ======= */}
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li>
                  <a onClick={deleteTheUser}> Delete Account</a>
                </li>

                {user && (
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                )}

                <li>
                  <a onClick={logOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/sign-in">
              <div className="w-10 p-2 px-3 border-2 border-gray-300 rounded-full p-0">
                <img src={man} alt="man" />
              </div>
            </Link>
          )}
        </div>

        {user && (
          <label htmlFor="my-dashboard" className="btn drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </label>
        )}
      </div>
    </header>
  );
};

export default Header;
