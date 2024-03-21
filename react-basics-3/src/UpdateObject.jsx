import React, { useState } from 'react';


function UpdateObject() {

    const [person, setPerson] = useState({
        name:'Ivan Ivanov',
        age: 30,
        city: "Sofia"
    })

    const updatePersonName = e => {
        setPerson({
            ...person,
            name: e.target.value
        });
    };

    const updatePersonAge = e => {
        setPerson({
            ...person,
            age: e.target.value
        });
    };

    const updatePersonCity = e => {
        setPerson({
            ...person,
            city: e.target.value
        });
    };

    return (
    <>
        <hr />
            <label> Name:
                <input
                    value={person.name}
                    name="name"
                    onChange={updatePersonName}
                />
        </label>
        <br />
        <label> Age:
                <input type="number"
                    value={person.age}
                    age="age"
                    onChange={updatePersonAge}
                />
        </label>
        <br />
        <label> City:
                <input
                    value={person.city}
                    city="city"
                    onChange={updatePersonCity}
                />
        </label>
        <br />
        <p>Name is {person.name}. Age is {person.age} years old. City is {person.city}.</p>
    </>
    );
}

export default UpdateObject