import { useContext } from "react";
import Contador from "../Contador";
import { contexto } from "../CartContext";

const ItemDetail = ({product}) =>{
    
    const {agregarProducto} = useContext(contexto)
     

    const {image, title} = product
    const onAdd = (contador) =>{
        product.cantidad = contador
        agregarProducto(product)
    }

    return ( 
        <div>
         <h4>{title}</h4>
         <img src={image}/>
         <Contador onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail