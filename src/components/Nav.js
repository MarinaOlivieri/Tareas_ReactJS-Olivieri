import React from 'react'

const Nav = (props) => {
    
    const condicion = true

    if(props.type == "header"){
        return (
            <nav>
            <a href="#">Inicio</a>
            <a href="#">Contacto</a>
            <a href="#">Ubicaccion</a>
            </nav>
          )
    }else{
        return (
            <nav>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Youtube</a>
            </nav>
          )
    } 
}

export default Nav