import CardBooks from "./CardBooks";

function Books() {

    return (
      <>
       <h3>All your Books</h3>
       <b>Your books are here</b>

       <CardBooks 
       title = "Book Number One"
       img = "./Picture.jpg"
       author = "Book One Author"
       description = "Description about Book Number One ..."
       />

       <CardBooks 
       title = "Book Number Two"
       img = "./Picture.jpg"
       author = "Book Two Author"
       description = "Description about Book Number Two ..."
       />

       <CardBooks 
       title = "Book Number Three"
       img = "./Picture.jpg"
       author = "Book Three Author"
       description = "Description about Book Number Three ..."
       />

       <CardBooks 
       title = "Book Number Four"
       img = "./Picture.jpg"
       author = "Book Four Author"
       description = "Description about Book Number Four ..."
       />

      </>
    )
  }
  
  export default Books;
  