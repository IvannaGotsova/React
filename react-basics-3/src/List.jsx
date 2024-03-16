

function List() {

    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

    const numbersArray = numbers.map(number => <li>{number}</li>);

    return(
        <><ul>{numbersArray}</ul></>
    );
}

export default List