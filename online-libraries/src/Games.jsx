import CardGames from "./CardGames";

function Games() {

    return (
      <>
       <h3>All your Games</h3>
       <b>Your games are here</b>

       <CardGames 
       title = "Game Number One"
       img = "./Picture.jpg"
       author = "Game One Author"
       description = "Description about Game Number One ..."
       />

       <CardGames 
       title = "Game Number Two"
       img = "./Picture.jpg"
       author = "Game Two Author"
       description = "Description about Game Number Two ..."
       />

       <CardGames 
       title = "Game Number Three"
       img = "./Picture.jpg"
       author = "Game Three Author"
       description = "Description about Game Number Three ..."
       />

       <CardGames 
       title = "Game Number Four"
       img = "./Picture.jpg"
       author = "Game Four Author"
       description = "Description about Game Number Four ..."
       />

      </>
    )
  }
  
  export default Games;
  