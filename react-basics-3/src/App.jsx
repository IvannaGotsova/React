import Yes from "./Yes"
import No from "./No"


function App() {

  const valueExample = false; 
  const valueExampleTwo = true; 

    if (valueExample == false && valueExampleTwo == true) {
      return <Yes />
    } else if (valueExample == false || valueExampleTwo == false) {
      return <No />
    } 
}


export default App
