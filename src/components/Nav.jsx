import React, { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Outlet, NavLink, Link} from "react-router";
import { CounterContext } from "../Context/Context";


const Nav = () => {
  const count = useContext(CounterContext);
  return (
    <>
      <div className="flex sticky z-50 top-0 w-full items-center justify-between bg-gray-700 py-4 px-20">
        <div>
          <NavLink to='/' className="text-2xl text-white">Ecommerce App</NavLink>
        </div>
        <div className="flex flex-row list-none gap-10 text-white text-lg">
          <NavLink to="/" className='focus:text-blue-500'>Home</NavLink>
          <NavLink to="/products" className='focus:text-blue-500'>Products</NavLink>
          <NavLink to="/about" className='focus:text-blue-500'>About</NavLink>
          <Link to='/add-to-cart'>
          <div className="flex items-center cursor-pointer">
             <BsFillCartCheckFill />
             <p className=' text-xl font-bold'>
                      {count.itemCount}
                    </p>
              </div>
            </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
