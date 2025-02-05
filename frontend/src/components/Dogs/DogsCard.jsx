import React, {useState, useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import "./dogs.css";

const DogsCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props;
    const {addToCart, setTotal} = useContext(CartContext);
    const [isAdded, setAdded] = useState(false);

    const handleClick = () => {
        setAdded(true); 
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl,
        };
        addToCart((item) => [...item, newItems]);
        setTotal((total) => (total += Number(price)));
    }

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

            {/* Conditional rendering */}
            {isAdded ? (
                // When is it true then added to the cart
                <button disabled className="dogs-btn-disabled"> Added</button>
            ) : (
                // Just leave there 
                <button className="dogs-btn" onClick={handleClick}> Add to Cart</button>
            )}

        </section>

        </>
     );
}
 
export default DogsCard;