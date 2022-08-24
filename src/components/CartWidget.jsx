import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";

const CartWidget = () =>{

    const {cantidad} = useContext(contexto)
    

    return (
        <Link to= "/cart">
            <span className="material-symbols-outlined">
                shopping_cart_checkout
            </span> 
            {cantidad}
        </Link>
    )
}
 
export default CartWidget;