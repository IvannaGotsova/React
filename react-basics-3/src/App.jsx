import Yes from "./Yes"
import No from "./No"
import List from "./List";

function App() {

  const valueExample = false; 
  const valueExampleTwo = true; 

    if (valueExample == false && valueExampleTwo == true) {
      return (
        <>
            <Yes />
            <List />
        </>
      );
    } else if (valueExample == false || valueExampleTwo == false) {
      return (
        <>
            <No />
            <List />
        </>
      );
    } 


}


export default App
