// src/components/Contador.jsx
import React, { useState } from 'react'; // Importa useState

interface ContadorProps {
  valor_inicial: number; // Especifica que valor_inicial DEBE ser un número
}


function Contador({valor_inicial}:ContadorProps) {
  // Declara una variable de estado 'cuenta' y una función para actualizarla 'setCuenta'
  // El valor inicial de 'cuenta' es 0
  const [cuenta, setCuenta] = useState(valor_inicial);

  const incrementar = () => {
    setCuenta(cuenta + 1); // Actualiza el estado
  };

  const decrementar = () => {
    setCuenta(cuenta - 1); // Actualiza el estado
  };

  return (
    <div>
      <h2>Contador: {cuenta}</h2>
      <button style={{'color': 'green'}} onClick={incrementar}>IncrementarR
      </button>
      <button style={{'color': 'orange'}} onClick={decrementar}>DecrementarR</button>
    </div>
  );
}

export default Contador;