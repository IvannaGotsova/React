import { useState } from "react";

function ControlledComponent () {
  
  const [text, setText] = useState('');

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert('Text: ' + text);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Text: <b></b>
        <input type="text" value={text} onChange={changeHandler} placeholder='CONTROLLED'/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledComponent