import { useState } from "react"


function ToDoBody() {

    const [tasks, setTasks ] = useState([]);
    const [taskNumber, setTaskNumber ] = useState(0);
    const [taskTitle, setTaskTitle ] = useState("");
    const [taskDate, setTaskDate ] = useState(new Date().getDate());
    const [taskDescription, setTaskDescription ] = useState("");
    const [taskStatus, setTaskStatus ] = useState("");

    function handleAddTask () {

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
        <ol>

        </ol>
        <input type="number" value={taskNumber} placeholder="" onChange={handleTaskNumberChange} /> <br />
        <input type="text" value={taskTitle} placeholder="Your Task Title" onChange={handleTaskTitleChange} /> <br />
        <input type="date" value={taskDate} placeholder="" onChange={handleTaskDateChange} /> <br />
        <input type="text" value={taskDescription} placeholder="Your Task Description" onChange={handleTaskDescriptionChange} /> <br />
        <input type="text" value={taskStatus} placeholder="Your Task Status" onChange={handleTaskStatusChange} /> <br />
        <p>The number of your tasks is: {tasks.length}</p>
        </>
    )
}

export default ToDoBody