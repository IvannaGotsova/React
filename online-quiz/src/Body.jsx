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
    let answeredQuestions = 0;
    let countedPoints = 0;
    let sentence = `You have answered ${answeredQuestions} question and have ${countedPoints}!`;
 
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
       <h3>2. Question numeber two!:</h3>
       <button
         type="button"
         onClick={() => setNumberTwo("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberTwo("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberTwo("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberTwo("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberTwo("five")}
       >Five</button>  
       <br />
       <h3>3. Question numeber three!:</h3>
       <button
         type="button"
         onClick={() => setNumberThree("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberThree("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberThree("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberThree("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberThree("five")}
       >Five</button>  
       <br />
       <h3>4. Question number four!:</h3>
       <button
         type="button"
         onClick={() => setNumberFour("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberFour("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberFour("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberFour("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberFour("five")}
       >Five</button>  
       <br />
       <h3>5. Question number five!:</h3>
       <button
         type="button"
         onClick={() => setNumberFive("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberFive("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberFive("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberFive("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberFive("five")}
       >Five</button>  
       <br />
       <h3>6. Question number six!:</h3>
       <button
         type="button"
         onClick={() => setNumberSix("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberSix("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberSix("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberSix("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberSix("five")}
       >Five</button>  
       <br />
       <h3>7. Question number seven!:</h3>
       <button
         type="button"
         onClick={() => setNumberSeven("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberSeven("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberSeven("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberSeven("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberSeven("five")}
       >Five</button>  
       <br />
       <h3>8. Question number eight!:</h3>
       <button
         type="button"
         onClick={() => setNumberEight("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberEight("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberEight("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberEight("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberEight("five")}
       >Five</button>  
       <br />
       <h3>9. Question number nine!:</h3>
       <button
         type="button"
         onClick={() => setNumberNine("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberNine("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberNine("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberNine("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberNine("five")}
       >Five</button>  
       <br />
       <h3>10. Question number ten!:</h3>
       <button
         type="button"
         onClick={() => setNumberTen("one")} 
       >One</button>
       <button
         type="button"
         onClick={() => setNumberTen("two")} 
       >Two</button>
       <button
         type="button" 
         onClick={() => setNumberTen("three")}
       >Three</button>
       <button
         type="button"
         onClick={() => setNumberTen("four")}
       >Four</button>
       <button
         type="button"
         onClick={() => setNumberTen("five")}
       >Five</button>  
       <br />
       <h2>{sentence}</h2>
     </>
   );
 }

export default Body