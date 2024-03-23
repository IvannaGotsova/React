import Yes from "./Yes"
import No from "./No"
import List from "./List";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import CancelButton from "./CancelButton";
import UseStateExample from "./UseStateExample";
import UseStateExample2 from "./UseStateExample2";
import OnChangeHandler from "./OnChangeHandler";
import OnChangeHandler2 from "./OnChangeHandler2";
import OnChangeHandler3 from "./OnChangeHandler3";
import UseEffectExample from "./UseEffectExample";
import UseEffectExample2 from "./UseEffectExample2";
import UpdateArray from "./UpdateArray";
import UpdateObject from "./UpdateObject";

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
            <UpdateObject />
            <OnChangeHandler2 />
            <OnChangeHandler3 />
            <UseEffectExample />
            <UseEffectExample2 />
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
