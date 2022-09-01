import { Link } from "react-router-dom";
import { useContext } from "react";
import { context } from "./CartContext";

const CartWidget = () =>{

    const {productQty} = useContext(context)
    
    return (
        <Link to= "/cart">
            <span className="material-symbols-outlined">
                shopping_cart_checkout
            </span> 
            {productQty()}
        </Link>
    )
}
 
export default CartWidget;