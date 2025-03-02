import { useState } from 'react';

function PersonCard (props) {
    const [age, setAge] = useState(props.age)

    const updateAgeEventHandler = () => {
        if (age == 100) {
            setAge(age => props.age - 1)
        }
        setAge(age => age + 1)
    }

    return (
        <>
            <h3>{props.firstName} - {props.lastName}</h3>
            <p>{props.city}</p>
            <p>{age}</p>
            <button onClick={updateAgeEventHandler}>Update</button>

        </>
    )
}

export default PersonCard