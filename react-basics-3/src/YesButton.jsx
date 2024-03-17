

function YesButton() {

    const handleClick = (e) => e.target.textContent = "You clicked Yes Button two times.";

    return (
        <><button onDoubleClick = {(e) => handleClick(e)}> Click Yes Button!</button></>
    );
    
}

export default YesButton