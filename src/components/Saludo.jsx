// src/components/Saludo.jsx
import React from 'react';

// Desestructuración directa de la prop 'nombre'
function Saludo({ nombre }) {
  return (
    <h5>¡Hola, {nombre}! ¡Qué gusto verte por aquí!</h5>
  );
}

export default Saludo;