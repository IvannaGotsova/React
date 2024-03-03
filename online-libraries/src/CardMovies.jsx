
function CardMovies(props) {
    return (
        <>
            <div className="Movie">
                <h2 className ="Movie-title">{props.title}</h2>
                <img className ="Movie-image" src={props.img} alt="" />
                <h3 className ="Movie-actors">{props.author}</h3>
                <p className ="Movie-description">{props.description}</p>
                <button className ="Movie-button">View more...</button>
            </div>
        </>
    )
}

export default CardMovies