
function CardGames(props) {
    return (
        <>
            <h2 className ="Game-title">{props.title}</h2>
            <img className ="Game-image" src={props.img} alt="" />
            <h3 className ="Game-author">{props.author}</h3>
            <p className ="Game-description">{props.description}</p>
            <button className ="Game-button">View more...</button>
        </>
    )
}

export default CardGames