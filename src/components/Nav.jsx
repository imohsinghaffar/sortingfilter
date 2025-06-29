import React, { useContext, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Outlet, NavLink, Link } from "react-router";
import { CartDataContext } from "../Context/Context";
import { Menu, ShoppingBag, X } from "lucide-react";

const Nav = () => {
  const { itemCount } = useContext(CartDataContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#1F2937] shadow-md">
        <div className="flex items-center justify-between px-6 md:px-20 py-4">
          <div className="flex items-center gap-2 text-white">
            <ShoppingBag className="w-6 h-6" />
            <NavLink
              to="/"
              className="text-3xl font-semibold text-white hover:text-indigo-600 transition"
            >
              TrendVault
            </NavLink>
          </div>

          <ul className="hidden md:flex items-center gap-10 text-white text-lg font-medium">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "hover:text-indigo-500"}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? "text-white underline underline-offset-4" : "hover:text-indigo-500"}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className={({ isActive }) => isActive ? "text-indigo-400 underline underline-offset-4" : "hover:text-indigo-500"}>Contact Us</NavLink>
            </li>
            <li>
              <Link to="/add-to-cart" className="relative flex items-center text-white hover:text-indigo-400 transition">
                <BsFillCartCheckFill className="text-2xl" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white shadow-md">
                    {itemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          <div className="md:hidden flex items-center justify-center gap-6 text-white">
            <Link to="/add-to-cart" onClick={closeMenu} className="relative flex items-center gap-2 text-white hover:text-indigo-400">
              <BsFillCartCheckFill className="text-2xl" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1F2937] px-6 pb-4 space-y-4 text-white font-medium text-lg">
            <NavLink to="/" onClick={closeMenu} className="block hover:text-indigo-400">Home</NavLink>
            <NavLink to="/products" onClick={closeMenu} className="block hover:text-indigo-400">Products</NavLink>
            <NavLink to="/contactus" onClick={closeMenu} className="block hover:text-indigo-400">Contact Us</NavLink>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;