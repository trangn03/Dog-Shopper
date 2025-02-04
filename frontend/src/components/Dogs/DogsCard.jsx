const DogsCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props;

    return ( 
        <>
        <section className="dogs">
            <div className="dogs-info">
                <p> {name} </p>
                <p> {breed} </p>
            </div>

            <div className="dogs-img-container">
                <img className="dogs-img" src={imageUrl} alt={"picture of: ${name}"}/>
            </div>

            <div className="dogs-desc">{description}</div>

            <div className="dogs-price">${price}</div>

            <button className="dogs-btn"> Add to Cart</button>

        </section>

        </>
     );
}
 
export default DogsCard;