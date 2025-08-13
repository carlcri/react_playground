//ProductList.tsx
import React, {useState} from 'react';
import FilterControls from './FilterControls';
import { ALL_PRODUCTS } from "./ProductsData";
import { ChangeEvent } from 'react';
import { Z_FILTERED } from 'zlib';

function ProductList() {

  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [products_filtered, set_products_filtered] = useState(ALL_PRODUCTS);

  const uniqueCategories = ['all', ...new Set(ALL_PRODUCTS.map(p => p.category))];

  const applyFilter = (name:string, category: string) => {
//    console.log(`name: ${name}| cat: ${category}`);
    var filtered = ALL_PRODUCTS
    if(name){
      filtered = filtered.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
      }  

    if(selectedCategory !== 'all'){
      filtered = filtered.filter(element => element.category === selectedCategory);
    }

    set_products_filtered(filtered);
  }

  const handleSelectCategory = (event:ChangeEvent<HTMLSelectElement>) =>{
    const newCategory:string = event.target.value
    setSelectedCategory(newCategory);

    applyFilter(inputValue, newCategory);
    
    // if(selectedCategory !== 'all'){
    //   const filtered = products_filtered.filter(element => element.category === selectedCategory);
    //   set_products_filtered(filtered);
    // }
  }

  const handleInputChange= (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      const newInputValue:string = event.target.value;
      setInputValue(newInputValue);

      applyFilter(newInputValue, selectedCategory)
    
  }
  
  
  return (
    <>
    <FilterControls parentMethod={handleInputChange} 
                    parentValue={inputValue} 
                    uniqueCategories={uniqueCategories}
                    handleSelectCategory={handleSelectCategory}
                    category={selectedCategory}/>
    <strong> total productos: {products_filtered.length}</strong>
    <ul>
      {products_filtered.map((element:any)=>(
          <li key={element.id}>{element.id} | {element.name} | {element.category} | {element.price}</li>
      ))}
    </ul>
    
    </>     
  );
}
export default ProductList;




