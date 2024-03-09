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
        </label>
        <input type="submit" />      
        <p>{name}</p>
      </form>
    )
  }

  export default Form