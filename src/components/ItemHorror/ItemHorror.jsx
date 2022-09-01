import Contador from "../Contador";
import { useContext, useState } from "react";
import { context } from "../CartContext";

const ItemHorror = ({product}) =>{

    const {image, title} = product
    
    const [cantidad, setCantidad] = useState(0)
    
    const {isInCart, addProduct} = useContext(context)

    const onAdd = (cantidad) =>{
        isInCart(product.id)
        addProduct(product, cantidad)
    }
    

    return ( 
        <div>
            <h4>{title}</h4>
            <img src={image}/>
            <Contador onAdd={onAdd} cantidad={cantidad}/>
        </div>
    );
}
 
export default ItemHorror;