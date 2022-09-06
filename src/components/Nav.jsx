import {Link} from "react-router-dom"
import CartWidget from "./CartWidget"
import {products} from "../assets/productos"
import { useParams } from "react-router-dom"

const Nav = (props) => {

    const {category, id } = useParams
    // const {category} = products
    
    if(props.type == "header"){
        return (
            <nav>
            <CartWidget/>  
            <Link to={`/Fight/${category == id}`}>Fight</Link>
            <Link to={`/Accion/${category == id}`}>Accion</Link>
            <Link to={`/SurvivorHorror/${category == id}`}>Survivor Horror</Link>
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