import React from 'react';
import Nav from './Nav'

const Footer = (props) =>{
    return(
        <footer>
            <p>
                Nuestras {props.redes}
            </p>
            <Nav
                type="footer"
             />
        </footer>
    )
}

export default Footer;