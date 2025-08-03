import React, { useState } from 'react';

function PruebaJulian(){
    const [something, setSomething] = useState('');

    const enviar_datos = () =>{
        setSomething('')
        console.log(something);
    }

    const capturar_datos = (event:any) =>{
        setSomething(event.target.value);
    }

    return(
        <div>
            <h1>hola prueba</h1>
            <button onClick={enviar_datos}>Enviar Datos</button>
            <br />
            <input onChange={capturar_datos} value={something} type="text" />
        </div>
    )
}

export default PruebaJulian;


// function PruebaJulian(){
//     const [something, setSomething] = useState('algo');
//     const [datos, setDatos] = useState('');
//     let animal:string = 'pato';
//     console.log(something)

//     const enviar_datos = () => {
// //        console.log(`hola ${animal}`);
//         console.log(datos);
//         setDatos('')
//     }

//     const recuperar_datos = (evento:any) => {
//         setDatos(evento.target.value); 
//     }



//     return(
//         <div>
//             <h1>hola {animal}</h1>
//             <h3>hola {something}</h3>
//             <button onClick={enviar_datos}>enviar datos</button>
//             <input onChange={recuperar_datos} value={datos} type="text" />
//         </div>
//     )
// }
// export default PruebaJulian;
