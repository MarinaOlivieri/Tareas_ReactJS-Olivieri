import {Link} from "react-router-dom"
import CartWidget from "./CartWidget"
import {products} from "../assets/productos"

const Nav = (props) => {

    
    const {category} = products
    
    if(props.type == "header"){
        return (
            <nav>
            <CartWidget/>  
            <Link to={`/Fight/${category}`}>Fight</Link>
            <Link to={`/Accion/${category}`}>Accion</Link>
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