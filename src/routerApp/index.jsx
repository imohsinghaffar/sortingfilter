import React from "react";
import {BrowserRouter as Router, createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Products from "../pages/Products";
import CartDetails from "../components/AddToCart/CartDetails";
import ProductCard from "../components/ProductCard";
import Layout from "../Layout/Layout";

const RouterApp = () => {
    const router = createBrowserRouter([
        {
          element: <Layout />, // Layout route or we can also make separate file for layout
          children: [
            { path: "/", element: <Home /> },
            { path: "/contactus", element: <ContactUs/> },
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
