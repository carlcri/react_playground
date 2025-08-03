import React, { useState } from 'react';

function TaskInput() {
  // 1. Estado para guardar el texto del campo de entrada
  const [taskText, setTaskText] = useState('');

  // 2. Manejador de eventos para cuando el valor del input cambia
  const handleInputChange = (event: any) => {
    setTaskText(event.target.value);
  };

  // Puedes añadir una función aquí más tarde para cuando la tarea se añade
  const handleAddTask = () => {
    if (taskText.trim() !== '') { // Asegura que no se añadan tareas vacías
      console.log('Tarea a añadir:', taskText);
      // Aquí es donde en el futuro añadirías la lógica para añadir la tarea a tu lista principal
      setTaskText(''); // Limpia el input después de "añadir"
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Añade una nueva tarea..."
        value={taskText} // El valor del input está controlado por el estado
        onChange={handleInputChange} // Cada cambio en el input actualiza el estado
      />
      <button onClick={handleAddTask}>Añadir Tarea</button>
      {/* Opcional: Muestra el estado actual del input para verificar */}
      <p>Texto actual del input: {taskText}</p>
    </div>
  );
}

export default TaskInput;