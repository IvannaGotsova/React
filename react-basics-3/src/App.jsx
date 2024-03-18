import Yes from "./Yes"
import No from "./No"
import List from "./List";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import CancelButton from "./CancelButton";
import UseStateExample from "./UseStateExample.";

function App() {

  const valueExample = false; 
  const valueExampleTwo = true; 

    if (valueExample == false && valueExampleTwo == true) {
      return (
        <>
            <Yes />
            <List />
            <YesButton />
            <NoButton />
            <CancelButton />
            <UseStateExample />
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
