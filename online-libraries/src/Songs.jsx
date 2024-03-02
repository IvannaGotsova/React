import CardSongs from "./CardSongs";

function Songs() {

    return (
      <>
       <h3>All your Songs</h3>
       <b>Your songs are here</b>

       <CardSongs 
       title = "Song Number One"
       img = "./Picture.jpg"
       author = "Song One Author"
       description = "Description about Song Number One ..."
       />

       <CardSongs 
       title = "Song Number Two"
       img = "./Picture.jpg"
       author = "Song Two Author"
       description = "Description about Song Number Two ..."
       />

       <CardSongs 
       title = "Song Number Three"
       img = "./Picture.jpg"
       author = "Song Three Author"
       description = "Description about Song Number Three ..."
       />

       <CardSongs 
       title = "Song Number Four"
       img = "./Picture.jpg"
       author = "Song Four Author"
       description = "Description about Song Number Four ..."
       />

      </>
    )
  }
  
  export default Songs;
  