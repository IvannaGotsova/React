import Yes from "./Yes"
import No from "./No"
import List from "./List";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import CancelButton from "./CancelButton";
import UseStateExample from "./UseStateExample";
import UseStateExample2 from "./UseStateExample2";
import OnChangeHandler from "./OnChangeHandler";
import UpdateArray from "./UpdateArray";

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
            <OnChangeHandler />
            <UseStateExample2 />
            <UpdateArray />
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
