import React from 'react';
import FilterControls from './FilterControls';


function ProductList() {
  const FilterValues = (product_name:string) => {
    console.log(product_name);
  }
  

  return (
    <div>
      <FilterControls onFilterValues={FilterValues}/>
      <h3>{}</h3>
    </div>
  );
}

export default ProductList;