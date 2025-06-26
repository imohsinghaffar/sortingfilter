import React from "react";
import {BrowserRouter as Router, createBrowserRouter, RouterProvider } from "react-router";
import Nav from "../components/Nav";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import CartDetails from "../components/AddToCart/CartDetails";
import ProductCard from "../components/ProductCard";

const RouterApp = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Nav />, // Layout route
          children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About/> },
            { path: "/products", element: <Products /> },
            { path: "/add-to-cart", element: <CartDetails /> },
            { path: "/cart", element: <ProductCard /> },
          ],
        },
      ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RouterApp;
