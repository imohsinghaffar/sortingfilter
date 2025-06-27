import React, { useContext } from 'react';
import { CartDataContext } from '../Context/Context';

const ProductCard = ({ product }) => {
  const { CartDataHandler } = useContext(CartDataContext);

  const handleAddToCart = () => {
    CartDataHandler(product);
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden p-4">
      <img 
        // src={product.images[0]} 
        alt={product.title} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-indigo-700 font-bold text-xl mb-4">${product.price}</p>
      <button 
        onClick={handleAddToCart}
        className="w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
