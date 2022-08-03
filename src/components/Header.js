import React from 'react';
import Nav from './Nav'

const Header = () =>{
    return(
        <header id="header">
            <h1 className="titulo">Compra tu videojuego</h1>
            <img className='imagen' src="/logo192.png"/>
            <span className="material-symbols-outlined">
                shopping_cart_checkout
            </span>
            <Nav 
                type="header"
            />
        </header>
    )
}

export default Header;