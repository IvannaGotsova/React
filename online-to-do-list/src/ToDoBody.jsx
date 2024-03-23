import { useState } from "react"


function ToDoBody() {

    const [tasks, setTasks ] = useState([]);
    const [taskNumber, setTaskNumber ] = useState(0);
    const [taskTitle, setTaskTitle ] = useState("");
    const [taskDate, setTaskDate ] = useState(new Date().getDate());
    const [taskDescription, setTaskDescription ] = useState("");
    const [taskStatus, setTaskStatus ] = useState("");

    function handleAddTask () {
        
        if (taskNumber !== 0 &&
            taskTitle.trim() !== "" &&
            taskDescription.trim() !== "" &&
            taskTitle.trim() !== "") {
            const newTask = {number: taskNumber, title: taskTitle, date: taskDate, description: taskDescription, status: taskStatus};

            setTasks (t => [...t, newTask]);

            setTaskNumber(0);
            setTaskTitle("");
            setTaskDate(new Date().getDate());
            setTaskDescription("");
            setTaskStatus("");
        }

    }

    function handleRemoveTask (index) {
        setTasks(t => t.filter((_, taskIndex) => taskIndex !== index));
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

    function moveTaskToTheTop (index) {
        
        if (index > 0) {
            const upTasks = [...tasks];
            [upTasks[index], upTasks[index - 1]] =
            [upTasks[index - 1], upTasks[index]]
            setTasks(upTasks);
        }

    }

    function moveTaskToTheBottom (index) {
        
        if (index < tasks.length - 1) {
            const downTasks = [...tasks];
            [downTasks[index], downTasks[index + 1]] =
            [downTasks[index + 1], downTasks[index]]
            setTasks(downTasks);
        }

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
                    Number: {task.number} <br />
                    Title: {task.title} <br />
                    Date: {task.date} <br />
                    Description: {task.description} <br />
                    Status: {task.status} <br />
                    <button onClick={() => moveTaskToTheTop(index)}>Move to Top</button>
                    <button onClick={() => moveTaskToTheBottom(index)}>Move to Bottom</button>
                    <br />
                    <button onClick={() => handleRemoveTask(index)}>Remove This Task</button>
                    <hr />
                </li>)}
        </ol>
        
        <p>The number of your tasks is: {tasks.length}</p>
        </>
    );
}

export default ToDoBody