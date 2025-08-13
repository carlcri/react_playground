//src/App.jsx
import React from 'react';
import ProductList from './components/ProductList';
import FilterExercises from './components/FilterExercises';


function App() {
    const FilterValues = (product_name:string) => {
      console.log(product_name);
    }
  
    return (
      <div>
        <h3>¡Hola, React desde Cero!</h3>
        {/* <FilterExercises/> */}
        <br />
        <ProductList/>
        <>
        </>
      </div>
    );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css'; // Asegúrate de que este archivo de CSS exista

// // --- 1. Datos del proyecto y tipo de datos ---
// export interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
// }

// export const ALL_PRODUCTS: Product[] = [
//   { id: 1, name: 'Laptop Pro', category: 'Electrónica', price: 1200 },
//   { id: 2, name: 'Teclado Mecánico', category: 'Electrónica', price: 90 },
//   { id: 3, name: 'Mouse Inalámbrico', category: 'Electrónica', price: 45 },
//   { id: 4, name: 'Silla Ergonómica', category: 'Muebles', price: 300 },
//   { id: 5, name: 'Escritorio Ajustable', category: 'Muebles', price: 500 },
//   { id: 6, name: 'Libro de Cocina', category: 'Libros', price: 25 },
//   { id: 7, name: 'Auriculares Bluetooth', category: 'Electrónica', price: 150 },
//   { id: 8, name: 'Lámpara de Escritorio', category: 'Muebles', price: 60 },
//   { id: 9, name: 'Mesa de Centro', category: 'Muebles', price: 180 },
// ];

// // --- 2. Componente de Controles de Filtro ---
// interface FilterControlsProps {
//   searchTerm: string;
//   setSearchTerm: (term: string) => void;
//   categories: string[];
//   selectedCategory: string;
//   setSelectedCategory: (category: string) => void;
// }

// const FilterControls: React.FC<FilterControlsProps> = ({
//   searchTerm,
//   setSearchTerm,
//   categories,
//   selectedCategory,
//   setSelectedCategory,
// }) => {
//   return (
//     <div className="filters-container">
//       <h3>Filtros</h3>
//       <div className="filter-group">
//         <label>Buscar por nombre:</label>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Ej. Laptop"
//         />
//       </div>
//       <div className="filter-group">
//         <label>Categoría:</label>
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category === 'all' ? 'Todas' : category}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// // --- 3. Componente de la Lista de Productos ---
// interface ProductListProps {
//   products: Product[];
// }

// const ProductList: React.FC<ProductListProps> = ({ products }) => {
//   return (
//     <div className="product-list-container">
//       <h2>Productos ({products.length})</h2>
//       {products.length === 0 ? (
//         <p>No se encontraron productos con los filtros seleccionados.</p>
//       ) : (
//         products.map((product) => (
//           <div key={product.id} className="product-card">
//             <h3>{product.name}</h3>
//             <p>Categoría: {product.category}</p>
//             <p>Precio: ${product.price}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// // --- 4. Componente Principal de la Aplicación ---
// function App() {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [selectedCategory, setSelectedCategory] = useState<string>('all');
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>(ALL_PRODUCTS);

//   const uniqueCategories = ['all', ...new Set(ALL_PRODUCTS.map((p) => p.category))];

//   useEffect(() => {
//     let productsToFilter = [...ALL_PRODUCTS];

//     if (searchTerm) {
//       productsToFilter = productsToFilter.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (selectedCategory !== 'all') {
//       productsToFilter = productsToFilter.filter((product) =>
//         product.category === selectedCategory
//       );
//     }

//     setFilteredProducts(productsToFilter);
//   }, [searchTerm, selectedCategory]);

//   return (
//     <div className="app-container">
//       <h1>Catálogo de Productos</h1>
      
//       <FilterControls
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         categories={uniqueCategories}
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />

//       <ProductList products={filteredProducts} />
//     </div>
//   );
// }

// export default App;



