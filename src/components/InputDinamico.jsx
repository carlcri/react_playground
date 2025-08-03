// src/components/InputDinamico.jsx
import React, { useState } from 'react';

function InputDinamico() {
  const [texto, setTexto] = useState('soy la comadreja');

  const manejarCambio = (evento) => {
    // evento.target.value contiene el valor actual del campo de entrada
    setTexto(evento.target.value);
  };

  return (
    <div>
      <h3>Escribe algo:</h3>
      <input
        type="text"
        value={texto} // El valor del input está controlado por el estado
        onChange={manejarCambio} // Actualiza el estado cuando el input cambia
      />
      <p>Has escrito: {texto}</p>
    </div>
  );
}

export default InputDinamico;