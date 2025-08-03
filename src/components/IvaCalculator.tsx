import React, { useState, ChangeEvent } from 'react';
import TaxDisplay from './TaxDisplay';

function IvaCalculator(){
//    console.log('hola calculator')
    const [price, setPrice] = useState(0);
    const [ivaPercentage, setIvaPercentage] = useState(5);
    const [currency, setCurrency] = useState('COP');

    const calculate_price = (event:ChangeEvent<HTMLInputElement>) =>{
        setPrice(Number(event.target.value));
    }

    const handleIvaChange = (event:ChangeEvent<HTMLSelectElement>) =>{
        setIvaPercentage(Number(event.target.value));
    }

    const handleCurrency = (event:ChangeEvent<HTMLSelectElement>) =>{
        setCurrency(event.target.value);
    }

    const resetDefaults = (event:any) => {
        console.log('hola reset')
        setPrice(0);
        setIvaPercentage(5);
        setCurrency('COP');
    }

//    console.log(ivaPercentage);
//    console.log(price);
    const new_price: string = ((price)*(1+ivaPercentage/100)).toFixed(2);
    const tax_value: string = (price*ivaPercentage/100).toFixed(2);

    return(
        <div>
            <div>
                <input onChange={calculate_price} value={price} type="number" />
                <br />
                {/* <p>Before tax: {price} {currency}</p>
                <p>Tax Amount: {price*ivaPercentage/100} {currency}</p>
                <p>After tax: {new_price.toFixed(2)} {currency}</p> */}
            </div>
            <div>
                <select name="" id="" value={ivaPercentage} onChange={handleIvaChange}>
                    <option value="5">5%</option>
                    <option value="16">16%</option>
                    <option value="21">21%</option>
                </select>
            </div>
            <div>
                <select name="" id="" value={currency} onChange={handleCurrency}>
                    <option value="COP">COP</option>
                    <option value="CAD">CAD</option>
                    <option value="ARG">ARG</option>
                </select>
            </div>
            <div>
                <button onClick={resetDefaults}>Reset</button>
            </div>
            <br />
            <div>
                <TaxDisplay tax={tax_value} net_price={new_price} price={price} currency={currency}/>       
            </div>
        </div>
    )
}

export default IvaCalculator;




// import React, { useState, ChangeEvent } from 'react'; // Importamos ChangeEvent para tipar mejor

// function IvaCalculator(){
//     const [price, setPrice] = useState(0)
//     const [ivaPercentage, setIvaPercentage] = useState(16); // Valor predeterminado del 16%

//     const calculate_price = (event: ChangeEvent<HTMLInputElement>) =>{ // Usamos ChangeEvent para input
//         setPrice(Number(event.target.value));
//     }

//     --- NUEVA FUNCIÓN PARA CAMBIAR EL IVA ---
//     const handleIvaChange = (event: ChangeEvent<HTMLSelectElement>) => { // Usamos ChangeEvent para select
//         setIvaPercentage(Number(event.target.value)); // Convertimos el valor a número
//     }
//     ----------------------------------------

//     const ivaAmount = price * (ivaPercentage / 100);
//     const new_price = price + ivaAmount;

//     return(
//         <div>
//             <div>
//                 <label htmlFor="base-price">Precio Base:</label>
//                 <input
//                     id="base-price"
//                     onChange={calculate_price}
//                     value={price}
//                     type="number"
//                 />
//             </div>
//             <br />
//             <div>
//                 <label htmlFor="iva-selector">Selecciona IVA:</label>
//                 <select
//                     id="iva-selector"
//                     onChange={handleIvaChange} // Manejador para el select
//                     value={ivaPercentage}      // El valor seleccionado reflejará el estado
//                 >
//                     <option value={5}>5%</option>
//                     <option value={16}>16%</option>
//                     <option value={21}>21%</option>
//                     {/* Puedes añadir más opciones aquí */}
//                 </select>
//             </div>
//             <br />
//             <p>IVA aplicado: **{ivaPercentage}%**</p>
//             <p>Monto del IVA: **{ivaAmount.toFixed(2)}**</p>
//             <p>Precio final (impuesto incluido): **{new_price.toFixed(2)}**</p>
//         </div>
//     )
// }

// export default IvaCalculator;