import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Card from '../products/Card';
import { CounterContext } from '../../Context/Context';

const CounterProvider = ({children}) => {
    const [itemCount, setItemCount] = useState(0);

    function itemCountHandler()
    {
      let newItemCount = itemCount + 1;
      setItemCount(newItemCount); 
    }

    const value = {
      itemCount,itemCountHandler
    }

  return (
    <>
<CounterContext.Provider value = {value}>
    {children}
</CounterContext.Provider>
    </>
  )
}

export default CounterProvider
