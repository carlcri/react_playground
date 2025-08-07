import React, {useState, MouseEvent} from "react";
import AddTaskForm from "./AddTaskForm";


function ToDoList(){

    const [tasks, setTasks] = useState<string[]>([]);
    const handleNewTask = (newtask: string)=>{
        console.log(`hello ${newtask}`);
        setTasks([...tasks, newtask]);
    }

    const handleSelect = (event:MouseEvent)=>{
        console.log(`mouse over ${event.currentTarget.textContent}`);
    };

    return(
        <div>
            <h1>ToDoList</h1>
            <AddTaskForm onAddTask={handleNewTask}/>
            <ul>
                {tasks.map((element, index)=>(
                    <li key={index} onMouseOver={handleSelect}>{element}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;


// import React, { useState, MouseEvent } from "react";
// import AddTaskForm from "./AddTaskForm";

// // Define the Task interface directly in this file for simplicity,
// // or import it if you put it in a separate types.ts file.
// interface Task {
//     id: number;
//     text: string;
//     completed: boolean;
// }

// function ToDoList() {
//     const [tasks, setTasks] = useState<Task[]>([]); // State now holds an array of Task objects

//     const handleNewTask = (newTaskText: string) => {
//         if (newTaskText.trim() === '') return; // Prevent adding empty tasks
//         const newTask: Task = {
//             id: Date.now(), // Simple unique ID (good for quick examples)
//             text: newTaskText,
//             completed: false, // New tasks are initially not completed
//         };
//         setTasks((prevTasks) => [...prevTasks, newTask]);
//         console.log(`Added task: "${newTaskText}"`);
//     };

//     // New function to toggle the 'completed' status
//     const handleToggleComplete = (idToToggle: number) => {
//         setTasks((prevTasks) =>
//             prevTasks.map((task) =>
//                 task.id === idToToggle ? { ...task, completed: !task.completed } : task
//             )
//         );
//         console.log(`Toggled completion for task ID: ${idToToggle}`);
//     };

//     // The handleSelect (mouse over) function remains similar, but can use the task text directly
//     const handleSelect = (event: MouseEvent<HTMLLIElement>) => {
//         console.log(`Mouse over task: ${event.currentTarget.textContent}`);
//     };

//     return (
//         <div>
//             <h1>ToDoList</h1>
//             <AddTaskForm onAddTask={handleNewTask} />
//             <h2 style={{marginTop: '20px'}}>Your Tasks:</h2>
//             {tasks.length === 0 ? (
//                 <p>No tasks yet! Add some above.</p>
//             ) : (
//                 <ul>
//                     {tasks.map((task) => (
//                         <li
//                             key={task.id} // Use task.id for key, as it's unique
//                             onMouseOver={handleSelect}
//                             onClick={() => handleToggleComplete(task.id)} // Click to toggle
//                             // Apply conditional styling based on task.completed
//                             style={{
//                                 textDecoration: task.completed ? 'line-through' : 'none',
//                                 cursor: 'pointer', // Indicate it's clickable
//                                 color: task.completed ? '#888' : '#333', // Dim completed tasks
//                             }}
//                         >
//                             {task.text}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

// export default ToDoList;