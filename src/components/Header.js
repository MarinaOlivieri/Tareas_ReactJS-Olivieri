import React from 'react';
import Nav from './Nav'

const Header = () =>{
    return(
        <header id="header">
            <h1 className="titulo">Compra tu videojuego</h1>
            <img src="/logo192.png"/>
            <Nav 
                type="header"
            />
        </header>
    )
}

export default Header;