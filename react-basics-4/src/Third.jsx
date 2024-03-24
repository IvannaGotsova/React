import { useContext } from "react";
import { WordContext } from "./First";
import Fourth from "./Fourth"

function Third() {
  
    const word = useContext(WordContext);

    return (
        <div className="example">         
          <p>This is Third</p>
          <p>{`${word}`}</p>
          <Fourth />
        </div>
      );
  }
  
export default Third