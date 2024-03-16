

function List() {

    const numbers = [{id:1, name:"one", value:1}, 
                     {id:2, name:"two", value:2},
                     {id:3, name:"three", value:3}, 
                     {id:4, name:"four", value:4},   
                     {id:5, name:"five", value:5},   
                     {id:6, name:"six", value:6},  
                     {id:7, name:"seven", value:7},  
                     {id:8, name:"eight", value:8},  
                     {id:9, name:"nine", value:9},  
                     {id:10, name:"ten", value:10}];

    const numbersArray = numbers.map(number => <li key={number.id}>Name:
                                                       {number.name}-Value:
                                                       {number.value}</li>);

    return(
        <><ul>{numbersArray}</ul></>
    );
}

export default List