import { useState } from 'react';

function Forms () {
    const [input, setInput] = useState({});

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(values => ({...values, [name]: value}))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    alert(input);
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Enter your username:
      <input 
        type="text" 
        name="username" 
        value={input.username || ""} 
        onChange={changeHandler}
      />
      </label>
      <br />
      <label>Enter your password:
      <input 
        type="text" 
        name="password" 
        value={input.password || ""} 
        onChange={changeHandler}
      />
      </label>
      <br />
      <label>Confirm your password:
      <input 
        type="text" 
        name="confirm-password" 
        value={input.confirmPassword || ""} 
        onChange={changeHandler}
      />
      </label>
      <br />
      <label>Enter your first name:
      <input 
        type="text" 
        name="first name" 
        value={input.firstname || ""} 
        onChange={changeHandler}
      />
      </label>
      <br />
      <label>Enter your last name:
      <input 
        type="text" 
        name="last name" 
        value={input.lastname || ""} 
        onChange={changeHandler}
      />
      </label>
      <br />
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={input.age || ""} 
          onChange={changeHandler}
        />
        </label>
        <br />
      <label>Enter your city:
        <input 
          type="text" 
          name="city" 
          value={input.city || ""} 
          onChange={changeHandler}
        />
        </label>
        <br />
      <input type="submit" />
    </form>
  )
}

export default Forms