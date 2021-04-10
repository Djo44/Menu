import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className='btn-container'>
      <button onClick={() => filterItems("")} className='filter-btn'>
        All
      </button>
      <button onClick={() => filterItems("breakfast")} className='filter-btn'>
        breakfast
      </button>
      <button onClick={() => filterItems("lunch")} className='filter-btn'>
        lunch
      </button>
      <button onClick={() => filterItems("shakes")} className='filter-btn'>
        shakes
      </button>
    </div>
  );
};

export default Categories;
