import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Books";
import Games from "./Games";
import Movies from "./Movies";
import Songs from "./Songs";

function Body() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" /> 
            <Route path="/books" element={<Books />} /> 
            <Route path="/games" element={<Games />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/songs" element={<Songs />} />
          </Routes>
        </BrowserRouter>
     <ul>
        <li><a href="Home">Home</a></li>
        <b>Start Here</b>
        <li><a href="Books">Books</a></li>
        <b>Your books are here</b>
        <li><a href="Games">Games</a></li>
        <b>Your games are here</b>
        <li><a href="Movies">Movies</a></li>
        <b>Your movies are here</b>
        <li><a href="Songs">Songs</a></li>
        <b>Your songs are here</b>
     </ul>   
    </>
  )
}

export default Body;
