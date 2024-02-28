import { BrowserRouter, Routes, Route } from "react-router-dom";
import VeryEasy from "./VeryEasy"
import Easy from "./Easy"
import Middle from "./Middle"
import Hard from "./Hard"
import VeryHard from "./VeryHard"

function Body() {
 
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/veryeasy" element={<VeryEasy />} /> 
            <Route path="/easy" element={<Easy />} />
            <Route path="/middle" element={<Middle />} />
            <Route path="/hard" element={<Hard />} />
            <Route path="/veryhard" element={<VeryHard />} />
          </Routes>
        </BrowserRouter>
        <ul>
            <li><a href="VeryEasy">Very Easy</a></li>
            <li><a href="Easy">Easy</a></li>
            <li><a href="Middle">Middle</a></li>
            <li><a href="Hard">Hard</a></li>
            <li><a href="VeryHard">Very Hard</a></li>
        </ul>
      </div>
    )
}

export default Body