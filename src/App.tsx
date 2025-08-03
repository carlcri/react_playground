// src/App.jsx
import React from 'react';
import Saludo from './components/Saludo';
// import AddTaskForm from './components/AddTaskForm';
// import Contador from './components/Contador'; // Importa el componente Contador
// import InputDinamico from './components/InputDinamico';
// import TaskInput from './components/TaskInput';
// import PruebaJulian from './components/PruebaJulian';
//  import IvaCalculator from './components/IvaCalculator';
 import MapNumbers from './components/MapNumbers';

function App() {
  return (
    <div>
      <h3>¡Hola, React desde Cero!</h3>
      <Saludo nombre="Juan" />
      <hr />
      <MapNumbers/>
      {/* <AddTaskForm/>
      <hr />
      <IvaCalculator/>
      <hr /> */}
      {/* <hr />
      <PruebaJulian/>
      <hr />
      <TaskInput/>
      <hr />
      <InputDinamico/>
      <hr /> 
      <Contador valor_inicial={30}/> 
      <hr />
      <Contador valor_inicial={-1}/>  */}
    </div>
  );
}

export default App;