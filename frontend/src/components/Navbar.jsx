import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  //here this is used to logout from the account
  //also navigate('') is moved on top because by doing that it is working
  //when it was kept on the bottom line of function it was not working idk why
  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };
  return (
    <div className="flex item-center justify-between py-5 font-medium">
      <Link to="/ ">
        <img src={assets.logo} alt="Forever" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm tex-gray-700 ">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>


      <div className="flex item-center gap-6">
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        {token && (
          



          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              src={assets.profile_icon}
              alt=""
              className="w-6 h-6 cursor-pointer"
            />
            {/* This is done so the dropdown wont be visible when  */}
            <div className=" group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-4 px-5 bg-slate-100 text-gray-500">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p className="cursor-pointer hover:text-black" onClick={logout}>
                  Logout
                </p>
              </div>
            </div>
          </div>
        )}

        <Link to={"/cart"} className="relative inline-block">
          <img src={assets.cart_icon} alt="cart" className="w-6 h-6" />
          <p className="absolute top-[-6px] right-[-6px] w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-xs">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="Menu Icon"
          className="w-6 h-6 cursor-pointer sm:hidden"
        />
      </div>

      {/* {THis is the sidebar when the screen gets small and for variable class name,that means when the 
      set variable changs the menubar changes so for that  we use {`backtick `}} */}
      <div
        className={`absolute top-0 right-0 h-screen overflow-hidden bg-white transition-all duration-300 ease-in-out ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex item-center gap-4 p-3 cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className=" py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className=" py-2 pl-6 "
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className=" py-2 pl-6 border-t"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className=" py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
