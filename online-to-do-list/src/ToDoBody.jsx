import { useState } from "react"


function ToDoBody() {

    const [tasks, setTasks ] = useState([]);
    const [taskNumber, setTaskNumber ] = useState(0);
    const [taskTitle, setTaskTitle ] = useState("");
    const [taskDate, setTaskDate ] = useState(new Date().getDate());
    const [taskDescription, setTaskDescription ] = useState("");
    const [taskStatus, setTaskStatus ] = useState("");


    return (
        <>
        </>
    )
}

export default ToDoBody