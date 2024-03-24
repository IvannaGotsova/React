import { useContext } from "react";
import { WordContext } from "./First";


function Fifth() {
  
    const word = useContext(WordContext);

    return (
        <div className="example">
          <p>This is Fifth</p>
          <p>{`${word}`}</p>
        </div>
      );
  }
  
export default Fifth