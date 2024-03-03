
function CardSongs(props) {
    return (
        <>
            <div className="Song">
                <h2 className ="Song-title">{props.title}</h2>
                <img className ="Song-image" src={props.img} alt="" />
                <h3 className ="Song-singer">{props.author}</h3>
                <p className ="Song-text">{props.description}</p>
                <button className ="Song-button">View more...</button>
            </div>
        </>
    )
}

export default CardSongs