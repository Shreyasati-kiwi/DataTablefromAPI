import React from "react";
import PropTypes from "prop-types";

const TableFilter = ({ filterData }) => {
  return (
    <div>
      <label htmlFor="class">Filter by class:</label>
      <select name="class" id="cars" onChange={filterData}>
        <option value="All">All</option>
        {[...Array(9)].map((val, ind) => (
          <option key={ind} value={ind + 1}>
            {ind + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

TableFilter.propTypes = {
  filterData: PropTypes.func,
};

export default TableFilter;
