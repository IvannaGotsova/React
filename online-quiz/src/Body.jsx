import Header from "./Header"


function Body() {
    const [numberOne, setNumberOne] = useState("");
    const [numberTwo, setNumberTwo] = useState("");
    const [numberThree, setNumberThree] = useState("");
    const [numberFour, setNumberFour] = useState("");
    const [numberFive, setNumberFive] = useState("");
    const [numberSix, setNumberSix] = useState("");
    const [numberSeven, setNumberSeven] = useState("");
    const [numberEight, setNumberEight] = useState("");
    const [numberNine, setNumberNine] = useState("");
    const [numberTen, setNumberTen] = useState("");
    let sentence = ``;
 
   return (
     <>
       <h3>1. Question numeber one!:</h3>
       <button
         type="button"
         onClick={() => setNumberOne("one")}
       >One</button>
       <button
         type="button"
         onClick={() => setNumberOne("two")}
       >Two</button>
       <button
         type="button"
         onClick={() => setNumberOne("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberOne("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberOne("five")}
       >Five</button>  
       <br />
     </>
   );
 }

export default Body