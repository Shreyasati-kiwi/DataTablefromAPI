import React from 'react'
import PropTypes from "prop-types"

const Pagination=({filteredData,onPageChange,presentPageVal})=> {
    

    
  return (
    <div>
    {[...Array(Math.ceil(filteredData.length / 5))].map((val, ind) => (
      <button
        className={`pagination-button ${
          ind + 1 === presentPageVal ? "selected" : ""
        }`}
        key={ind}
        onClick={() => onPageChange(ind + 1)}
      >
        {ind + 1}
      </button>
    ))}
  </div>
  )
}
Pagination.propTypes = {
    onPageChange: PropTypes.func,
};

export default Pagination