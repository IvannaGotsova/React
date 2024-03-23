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
        
    }

    function handleTaskTitleChange (event) {
        
    }

    function handleTaskDateChange (event) {
        
    }

    function handleTaskDescriptionChange (event) {
        
    }

    function handleTaskStatusChange (event) {
        
    }

    return (
        <>
        </>
    )
}

export default ToDoBody