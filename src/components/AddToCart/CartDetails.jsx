import React, { useContext } from "react";
import { CartDataContext } from "../../Context/Context";

const CartDetails = () => {
  const { cartData, updateQuantity, removeItem } = useContext(CartDataContext);
  const deliveryCharges = 45;

  const subtotal = cartData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + deliveryCharges;

  const increment = (id) => updateQuantity(id, 1);
  const decrement = (id) => updateQuantity(id, -1);

  return (
    <>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              <span className="w-full max-w-[200px] text-center">
                Delivery Charge
              </span>
              <span className="w-full max-w-[260px] text-center">Quantity</span>
              <span className="w-full max-w-[200px] text-center">Total</span>
            </p>
          </div>

          <div>
            {cartData.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">Your cart is empty.</p>
                <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
                  Continue Shopping
                </button>
              </div>
            ) : (
              cartData.map((item) => (
                <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                  <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="xl:w-[140px] rounded-xl object-cover"
                      />
                    </div>
                    <div className="pro-data w-full max-w-sm">
                      <div className="flex justify-between items-start">
                        <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                          {item.title}
                        </h5>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="20" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <polyline points="3 6 5 6 21 6"></polyline>
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  <line x1="10" y1="11" x2="10" y2="17"></line>
  <line x1="14" y1="11" x2="14" y2="17"></line>
</svg>
                        </button>
                      </div>
                      <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                        {item.category}
                      </p>
                      <h6 className="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center">
                        ${item.price.toFixed(2)}
                      </h6>
                    </div>
                  </div>
                  <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                      ${deliveryCharges.toFixed(2)}{" "}
                      <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                        (Delivery Charge)
                      </span>
                    </h6>
                    <div className="flex items-center w-full mx-auto justify-center">
                      <button
                        onClick={() => decrement(item.id)}
                        className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        onClick={() => increment(item.id)}
                        className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      >
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                      ${(item.price * item.quantity).toFixed(2)}
                    </h6>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartData.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-normal text-xl leading-8 text-gray-400">
                  Sub Total
                </p>
                <h6 className="font-semibold text-xl leading-8 text-gray-900">
                  ${subtotal.toFixed(2)}
                </h6>
              </div>
              <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                <p className="font-normal text-xl leading-8 text-gray-400">
                  Delivery Charge
                </p>
                <h6 className="font-semibold text-xl leading-8 text-gray-900">
                  ${deliveryCharges.toFixed(2)}
                </h6>
              </div>
              <div className="flex items-center justify-between w-full py-6">
                <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
                  Total
                </p>
                <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
                  ${total.toFixed(2)}
                </h6>
              </div>
            </div>
          )}

          {cartData.length > 0 && (
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
              <button className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">
                  Add Coupon Code
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998"
                    stroke="#4F46E5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
                Continue to Payment
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                >
                  <path
                    d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartDetails;