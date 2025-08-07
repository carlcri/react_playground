import React, {useState, ChangeEvent} from 'react'; // Importa useState

interface AddTaskFormProps{
    onAddTask: (new_task_text: string)=>void
}

function AddTaskForm(props: AddTaskFormProps){
    const [newTask, setNewTask] = useState('')

    const handleSubmit = (event:ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault()
//        console.log(`tarea: ${newTask}`);
        setNewTask('');
        props.onAddTask(newTask);
    }

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) =>{
        setNewTask(event.target.value);
    }

    return(
        <div>
            <h3>agregar una nueva tarea</h3>
            <form action="" onSubmit={handleSubmit}>
                <input value={newTask} onChange={handleInputChange} placeholder='escribe una tarea' type="text" />
                <button>Agregar tarea</button>
            </form>
        </div>
    );
}

export default AddTaskForm

