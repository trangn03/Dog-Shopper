import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router";

const Cart = () => {
    const {myCart, total, addToCart, setTotal} = useContext(CartContext);
    const navigate = useNavigate();
    const handleCheckout = () => {
        setTotal(0);
        addToCart([{}]);
        alert("Thanks for your purchase!");
    }
    const handleHome = () => {
        navigate("/");
    }
    return ( 
        <>
           <section className="cart-container">
                <div className="cart-header">MY CART</div>

                <div className="cart-items">
                    {myCart.map((item) => {
                        return (
                            <div className="cart-item">
                                <img src={item.imageUrl} className="cart-item-img" alt="error"/>
                                {item.name} : ${item.price}
                            </div>
                        )
                    })}

                    <div className="cart-total">
                        TOTAL: ${total}
                    </div>
                </div>

                <button className="cart-checkout" onClick={handleCheckout}>CHECKOUT</button>
                <button className="cart-gohome" onClick={handleHome}>GO BACK HOME</button>

           </section>
        </>
     );
}
 
export default Cart;