import { useState } from "react"


function ToDoBody() {

    const [tasks, setTasks ] = useState([]);
    const [taskNumber, setTaskNumber ] = useState(0);
    const [taskTitle, setTaskTitle ] = useState("");
    const [taskDate, setTaskDate ] = useState(new Date().getDate());
    const [taskDescription, setTaskDescription ] = useState("");
    const [taskStatus, setTaskStatus ] = useState("");

    function handleAddTask () {
        const newTask = {number: taskNumber, title: taskTitle, date: taskDate, description: taskDescription, status: taskStatus};

        setTasks (t => [...t, newTask]);
    }

    function handleRemoveTask (index) {
        
    }

    function handleTaskNumberChange (event) {
        setTaskNumber(event.target.value);
    }

    function handleTaskTitleChange (event) {
        setTaskTitle(event.target.value);
    }

    function handleTaskDateChange (event) {
        setTaskDate(event.target.value);
    }

    function handleTaskDescriptionChange (event) {
        setTaskDescription(event.target.value);
    }

    function handleTaskStatusChange (event) {
        setTaskStatus(event.target.value);
    }

    return (
        <>
         <h2>My Tasks</h2>
        <input type="number" value={taskNumber} placeholder="" onChange={handleTaskNumberChange} /> <br />
        <input type="text" value={taskTitle} placeholder="Your Task Title" onChange={handleTaskTitleChange} /> <br />
        <input type="date" value={taskDate} placeholder="" onChange={handleTaskDateChange} /> <br />
        <input type="text" value={taskDescription} placeholder="Your Task Description" onChange={handleTaskDescriptionChange} /> <br />
        <input type="text" value={taskStatus} placeholder="Your Task Status" onChange={handleTaskStatusChange} /> <br />
        <button onClick={handleAddTask}>Add New Task</button>
        
        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    {task.number} {task.title} {task.date} {task.description} {task.status}
                </li>)}
        </ol>
        
        <p>The number of your tasks is: {tasks.length}</p>
        </>
    );
}

export default ToDoBody