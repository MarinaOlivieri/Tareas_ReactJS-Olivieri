import { createContext } from 'react';
import { useState } from 'react';

export const contexto = createContext()
const {Provider} = contexto

const CartContext = (props) =>{

    const [cantidad, setCantidad] = useState(0)

    const agregarProducto = (producto) =>{
        console.log("Soy el contexto")
        console.log(producto)  
        setCantidad(cantidad + producto.cantidad)  
    }

    const eliminarProducto = () =>{}

    const valorDelcontexto = {
        cantidad: cantidad, 
        carrito: [],
        agregarProducto,
        eliminarProducto

    }

    return (  
        <Provider value={valorDelcontexto}>
            {props.children}
        </Provider>
    )
}
 
export default CartContext;