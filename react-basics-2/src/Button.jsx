

function Button() {

  const buttonMessage = () => alert("Button clicked!");

  return (
    <>
    
        <button onClick={buttonMessage}>Click the Button!</button>
    </>
  )
}

export default Button
