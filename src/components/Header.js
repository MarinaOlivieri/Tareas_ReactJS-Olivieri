import {Link} from "react-router-dom"
import Nav from './Nav'


const Header = () =>{
    return(
        <header id="header">
            <Link to="/">
            <h1 className="titulo_header">Compra tu videojuego</h1>
            </Link>
            <Nav 
                type="header"
            />
        </header>
    )
}

export default Header;