
function CardGames(props) {
    return (
        <>
            <div className="Game">
                <h2 className ="Game-title">{props.title}</h2>
                <img className ="Game-image" src={props.img} alt="" />
                <h3 className ="Game-players">{props.author}</h3>
                <p className ="Game-description">{props.description}</p>
                <button className ="Game-button">View more...</button>
            </div>
        </>
    )
}

export default CardGames