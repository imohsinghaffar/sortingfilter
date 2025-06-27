import React, { useContext } from "react";
import { CartDataContext, CounterContext } from "../../Context/Context";
import { useLocation, Link } from "react-router-dom";


const Card = ({ id, images, price, category, title, description }) => {
  const { itemCountHandler } = useContext(CounterContext);
  const { addToCart } = useContext(CartDataContext);
  const location = useLocation();
const isHomePage = location.pathname === "/";


  return (
    <div className="my-4 w-full max-w-sm mx-auto bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <img
          src={images}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-rose-600 text-white text-xs font-semibold px-2 py-1 rounded shadow-md">
          39% OFF
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        <p className="text-sm text-gray-400">{category}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-emerald-600">${price}</span>
        </div>

        {isHomePage ? (
  <Link
    to={`/products`}
    className="mt-5 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-200 shadow hover:shadow-lg"
  >
    More Details
  </Link>
) : (
  <button
    onClick={() => {
      itemCountHandler();
      addToCart(id, images, title, price, category);
    }}
    className="mt-5 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-200 shadow hover:shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3c-.6.6-.2 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    Add to Cart
  </button>
)}

      </div>
    </div>
  );
};

export default Card;
