

function Numbers () {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <ul>
                {numbers.map((number) => <li key={number.toString()}>{number * 100} - {number.toString()}</li>)}
            </ul>
        </>
    )
}

export default Numbers