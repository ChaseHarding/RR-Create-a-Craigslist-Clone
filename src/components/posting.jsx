function Posting(props){
    const { title, description, price, imageURL } = props.posting;
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <img src={imageURL} alt={title} />
        </div>
    )
}

export default Posting