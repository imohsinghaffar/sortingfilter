// import React, { memo, useContext } from "react";
import React from "react";
// import { useState, useEffect } from "react";
// import { counterContext } from "../context/context";

const Card = ({ images, price, id,  title, description }) => {

  return (
    <>
      <div className=" flex flex-col p-4">
        <div className=" bg-white rounded-lg shadow-md overflow-hidden h-full">
          <div className="p-4">
            <p className="hidden">{id}</p>
            <img
              className="w-full h-48 object-cover rounded-lg"
              src={images}
              alt={title}
            />
            <p className="text-xl font-semibold mt-2">{title}</p>
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {description}
            </p>
            <p className="text-lg font-bold mt-2">${price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
