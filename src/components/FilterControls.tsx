import React, {useState, ChangeEvent} from "react";

interface FilterControlsProps{
    parentMethod: (event: ChangeEvent<HTMLInputElement>) => void;
    parentValue: string;
    uniqueCategories: string[];
    handleSelectCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
    category: string;
}

function FilterControls({parentMethod, 
                         parentValue, 
                         uniqueCategories, 
                         handleSelectCategory,
                         category}: FilterControlsProps){
    
    return(
        <>
            <h4>Buscar Productos</h4>
            <input placeholder="ej, microfonoo" 
                   type="text" 
                   value={parentValue} 
                   onChange={parentMethod}/>
            <br />
            <select name="" id="" value={category} onChange={handleSelectCategory}>
                {uniqueCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>          
        </>
    );
}

export default FilterControls;