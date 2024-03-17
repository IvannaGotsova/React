

function CancelButton() {

    const handleClick = (e) => e.target.textContent = "You clicked Cancel Button one time.";
    
    return (
        <><button onClick = {(e) => handleClick(e)} >Click Cancel Button!</button></>
    );
}

export default CancelButton