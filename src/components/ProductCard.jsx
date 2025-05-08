import React, { useContext } from 'react';
import { CartDataContext } from '../Context/Context';

const ProductCard = ({ productList }) => {
  const { CartDataHandler } = useContext(CartDataContext);

  const handleAddToCart = () => {
    CartDataHandler(productList);
  };

  return (
    <div>
      <img src={productList.image} alt="" />
      <h2>{productList.title}</h2>
      <p>{productList.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
