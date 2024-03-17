

function NoButton() {

    const handleClick = (e) => e.target.textContent = "You touch No Button.";

    return (
        <><button onPointerMove={(e) => handleClick(e)}>Click No Button!</button></>
    );
}

export default NoButton

