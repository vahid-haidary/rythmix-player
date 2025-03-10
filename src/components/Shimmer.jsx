import React from 'react'

function Shimmer({className}) {
  return (
        <div className={`bg-gray-500 animate-pulse rounded-lg ${className}`}></div> 
  )
}

export default Shimmer