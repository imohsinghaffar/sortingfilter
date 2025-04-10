import React from 'react'

const SortPrice = ({ lowToHighPrice, highToLowPrice }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200">
        <span>Sort Price</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4"
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
        <div className="py-1">
          <button 
            onClick={lowToHighPrice}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-indigo-500"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
            Low to High
          </button>
          <button 
            onClick={highToLowPrice}
            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 text-indigo-500"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
            High to Low
          </button>
        </div>
      </div>
    </div>
  )
}

export default SortPrice