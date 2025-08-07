import React, {useState, ChangeEvent} from "react";
import { ALL_PRODUCTS } from "./ProductsData";


function FilterExercises(){
    const uniqueCategories = ['all', ...new Set(ALL_PRODUCTS.map(p => p.category))];

    const [name, setName] = useState<string>('');

    const [selectCategory, setSelectCategory] = useState<string>('all');

    const handleName = (event:ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    }

    const handleSelectCategory = (event:ChangeEvent<HTMLSelectElement>) => {
        setSelectCategory(event.target.value);
    }

    // const productos_filtrados_by_name = ALL_PRODUCTS.filter(element => 
    //     element.name.toLowerCase().includes(name.toLowerCase()));
    
    var products_filtered = ALL_PRODUCTS

    if(name){
        products_filtered = products_filtered.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
    }

    if(selectCategory !== 'all'){
        products_filtered = products_filtered.filter(element => element.category === selectCategory);
    }


    return(
        <>
        <h3>filtros</h3>
        <select name="" id="" value={selectCategory} onChange={handleSelectCategory}>
            {uniqueCategories.map((element, index) =>(
                <option key={index}  value={element}>{element}</option>
            ))}
        </select>
        <br />

        <input placeholder="ej, microfono" type="text" value={name} onChange={handleName}/>
        <ul>
            {products_filtered.map((element, index) =>(
                <li key={index}> {element.id} | {element.name} | {element.category} | {element.price}</li>
            ))}
        </ul>

        <br />   
        </>
    ); 
}

export default FilterExercises;


// import React, {useState, ChangeEvent} from "react";

// const productos = [
//   { nombre: 'Manzana', categoria: 'Frutas' },
//   { nombre: 'Leche', categoria: 'Lacteos' },
//   { nombre: 'Naranja', categoria: 'Frutas' },
//   { nombre: 'Queso', categoria: 'Lacteos' },
//   { nombre: 'Yogurt', categoria: 'Lacteos' },
// ];

// function FilterExercises(){
//     const [name, setName] = useState('')

// //    const productos_filtrados = productos.filter(element => element.categoria === name);
//     const productos_filtrados = productos.filter(element => 
//         element.categoria.toLowerCase().includes(name.toLowerCase()));

//     const handlename = (event:ChangeEvent<HTMLInputElement>)=>{
//         setName(event.target.value);
//     }
// //    console.log(name);
//     return(
//         <>
//         <h3>filtros</h3>
//         <ul>
//             <input placeholder="categoria" type="text" value={name} onChange={handlename}/>
//             {productos_filtrados.map((element, index) =>(
//                 <li key={index}>{element.nombre} | {element.categoria}</li>
//             ))}
//         </ul>
//         </>
//     ); 
// }

// export default FilterExercises;










// const numeros: number[] = [2, 8, 3, 10, 5, 7, 1, 1, 4, 9, 90];

// function FilterExercises(){
//     const numeros_filtrados = numeros.filter(element => element > 5);
//     return(
//         <>
//         <h3>filtros</h3>
//         <ul>
//             {numeros_filtrados.map((element, index) =>(
//                 <li key={index}>{element}</li>
//             ))}
//         </ul>
//         </>
//     ); 
// }

// export default FilterExercises;