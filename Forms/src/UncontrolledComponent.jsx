import React, { useRef } from 'react';

function UncontrolledComponent () {

  const input = useRef(""); 

  const textHandler = () => {
    input.current.select()
  };

  return (
    <div>
      <label>
        Text: <b></b>
        <input type="text" ref={input} placeholder='UNCONTROLLED' />
      </label>
      <button onClick={textHandler}>Submit</button>
    </div>
  );
}

export default UncontrolledComponent