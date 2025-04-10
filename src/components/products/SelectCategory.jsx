import React from 'react'
import { selectCategories } from '../../../data'

const SelectCategory = ({ selectHandle }) => {
  return (
    <div className="relative group">
      <div className="flex items-center outline-none">
        <select 
          onChange={selectHandle}
          className=" py-2 pr-8 rounded-lg cursor-pointer"
        >
          <option value="">Select Category</option>
          {selectCategories.map((cat, index) => (
            <option 
              key={index} 
              value={cat.name}
            >
              {cat.name}
            </option>
          ))}
        </select>
        

        
      </div>
    </div>
  )
}

export default SelectCategory