import { useState } from 'react';

function Form() {

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`The text you entered was: ${name}`)
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>{name}</p>
        </label>
        <input type="submit" />      
      </form>
    )
  }

  export default Form