import { useContext,  useState  } from "react";
import Contador from "../Contador";
import { context } from "../CartContext";


const ItemDetail = ({product}) =>{

    const {title, image } = product
    
    const [cantidad, setCantidad] = useState(0)

    const {isInCart, addProduct} = useContext(context)

    const onAdd = (cantidad) =>{
        alert(`Cantidad de productos ${cantidad}`)
        isInCart(product.id)
        addProduct(product, cantidad)
    }
    
    return ( 
        <div>
         <h4>{title}</h4>
         <img src={image}/>
         <Contador onAdd={onAdd} cantidad={cantidad}/>
        </div>
    )
}

export default ItemDetail