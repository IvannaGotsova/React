
function CardBooks(props) {
    return (
        <>
            <h2 className ="Book-title">{props.title}</h2>
            <img className ="Book-image" src={props.img} alt="" />
            <h3 className ="Book-author">{props.author}</h3>
            <p className ="Book-description">{props.description}</p>
            <button className ="Book-button">View more...</button>
        </>
    )
}

export default CardBooks