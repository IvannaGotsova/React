
function CardSongs(props) {
    return (
        <>
            <h2 className ="Song-title">{props.title}</h2>
            <img className ="Song-image" src={props.img} alt="" />
            <h3 className ="Song-author">{props.author}</h3>
            <p className ="Song-description">{props.description}</p>
            <button className ="Song-button">View more...</button>
        </>
    )
}

export default CardSongs