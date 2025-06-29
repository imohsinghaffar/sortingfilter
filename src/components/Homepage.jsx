import {
  ShoppingCart,
  Menu,
  Search,
  Truck,
  Shield,
  Headphones,
} from "lucide-react";
import { Link } from "react-router";
import { selectCategories } from "../../data";
import NewArrivalsSection from "./NewArrivalsSection";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Discover Quality Products,{" "}
                <span className="text-indigo-600">All in One Place</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
                Shop premium electronics, stylish clothing, modern furniture,
                and more. Fast delivery, secure checkout, and exceptional
                service guaranteed.
              </p>
              <div className="flex flex-col  sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products">
                  {" "}
                  <button className="cursor-pointer w-full bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
                    Browse Products
                  </button>
                </Link>
                <button className="border-2 cursor-pointer border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-900">
                    10K+
                  </div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-900">
                    5K+
                  </div>
                  <div className="text-gray-600 text-sm">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-900">
                    99%
                  </div>
                  <div className="text-gray-600 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://i.imgur.com/yVeIeDa.jpeg"
                  alt="Hero Product"
                  className="rounded-2xl shadow-2xl w-full object-cover h-64 sm:h-80 lg:h-96"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

     <NewArrivalsSection />

      {/* Categories Section */}

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're
              looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {selectCategories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200"
                >
                  <div className="relative overflow-hidden">
                    <Link to="/products">
                      {" "}
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </Link>
                    <div className="absolute group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-indigo-900 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated with Our Latest Offers
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            Subscribe to our newsletter and be the first to know about new
            products and exclusive deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className=" flex-1 px-4 py-3 rounded-lg bg-white  border-white focus:ring-2 focus:ring-indigo-300 outline-1 outline-white"
            />
            <button className="bg-white text-indigo-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
