import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


import { selectCategories } from "../../data";
import { Link, NavLink } from "react-router";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
      
  return (
    <>
    
    <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
            <div className="px-3 md:px-0 flex items-center justify-start gap-2 text-white">
          <ShoppingBag className="w-6 h-6" />
          <NavLink
            to="/"
            className="text-3xl font-semibold text-white hover:text-indigo-600 transition"
          >
            TrendVault
          </NavLink>
          </div>
              <p className="px-4 md:px-0 text-gray-300 mb-4 max-w-md">
                Your one-stop destination for quality products. We bring you the best selection of electronics,
                clothing, furniture, and more at unbeatable prices.
              </p>
              <div className="pt-4 md:pt-0 items-center justify-center md:items-start md:justify-start flex space-x-4">
              <FaFacebook to='#' className="text-2xl" />
              <FaSquareInstagram to='#' className="text-2xl" />
              <Link to='https://www.linkedin.com/in/mohsinghaffar/'><FaLinkedin className="text-2xl" /></Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-start">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 ">
                <li>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories imported from data.js file*/}
            <div className="text-center md:text-start">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {selectCategories.slice(0, 5).map((category) => (
                  <li key={category.id}>
                    <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-4 md:px-0 border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 TrendVault. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
      </>
  );
};

export default Footer;
