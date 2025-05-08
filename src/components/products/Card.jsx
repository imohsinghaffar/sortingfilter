import React, { useContext } from "react";
import { CartDataContext, CounterContext} from "../../Context/Context";


const Card = ({ id, images, price, category, title, description}) => {


  const {itemCountHandler} = useContext(CounterContext);
  const {addToCart} = useContext(CartDataContext)

  return (
<>  
      {/* <div className=" flex flex-col p-4 ">
        <div className=" bg-white rounded-lg shadow-md overflow-hidden h-full">
          <div className="p-4 space-y-3">
            <p className="hidden"></p>
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
            <button onClick={()=>{
              click.itemCountHandler();
              cartDataClick.addToCart(id, images, title, price);
            }}  className="bg-blue-500 self-end w-full text-white px-4 py-3 rounded-sm cursor-pointer">Add to Cart</button>
          </div>
        </div>
      </div> */}

      <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={images} alt="product image" />
    <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src={images} alt="product image" />

    <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> 
  </a>
  <div className="mt-4 px-5 pb-5">
    <a >
      <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
      <h5 className="text-xl tracking-tight text-slate-900">{category}</h5>
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {description}
            </p>
    </a>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">${price}</span>

      </p>
    </div>
    <a  onClick={()=>{
              itemCountHandler()
              addToCart(id, images, title, price, category );
            }} className="flex cursor-pointer items-center justify-center rounded-md self-end bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      
      Add to cart</a
    >
  </div>
</div>

    </>
  );
};

export default Card;
