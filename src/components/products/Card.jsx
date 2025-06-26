import React, { useContext } from "react";
import { CartDataContext, CounterContext } from "../../Context/Context";

const Card = ({ id, images, price, category, title, description }) => {
  const { itemCountHandler } = useContext(CounterContext);
  const { addToCart } = useContext(CartDataContext);

  return (
    <>
      <div className="my-8 px- w-full max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-60 overflow-hidden rounded-t-lg">
          <img
            src={images}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-medium px-2 py-1 rounded">
            39% OFF
          </span>
        </div>

        <div className="p-4">
          <h5 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h5>
          <p className="text-sm text-gray-500">{category}</p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-blue-700">${price}</span>
          </div>

          <button
            onClick={() => {
              itemCountHandler();
              addToCart(id, images, title, price, category);
            }}
            className="mt-5 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-md transition duration-200"
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
        </div>
      </div>
    </>
  );
};

export default Card;
