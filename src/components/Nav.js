import {Link} from "react-router-dom"

const Nav = (props) => {
    
    if(props.type == "header"){
        return (
            <nav>
            <Link to= "/cart">
                <span className="material-symbols-outlined">
                shopping_cart_checkout
                </span> 
            </Link>
            <Link to="/PS4">PS4</Link>
            <Link to="/PS5">PS5</Link>
            <Link to="/PC">PC</Link>
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