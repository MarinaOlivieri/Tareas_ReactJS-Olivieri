import {Link} from "react-router-dom"
import { products } from "../assets/productos"

const Nav = (props) => {
    
    const {category} = products
    
    if(props.type == "header"){
        return (
            <nav>
            <Link to= "/cart">
                <span className="material-symbols-outlined">
                shopping_cart_checkout
                </span> 
            </Link>
            <Link to={`/Fight/${category}`}>Fight</Link>
            <Link to={`/Aventure/${category}`}>Aventure</Link>
            <Link to={`/SurvivorHorror/${category}`}>Survivor Horror</Link>
            </nav>
        )
    }else{
        return (
            <nav>
            <Link to="/instagram">Instagram</Link>
            <Link to="/facebook">Facebook</Link>
            <Link to="/youtube">Youtube</Link>
            </nav>
          )
    } 
}

export default Nav