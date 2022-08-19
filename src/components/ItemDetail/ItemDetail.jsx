import Contador from "../Contador";

const ItemDetail = ({product}) =>{

    const {image, title} = product
    const onAdd = (contador) =>{
        product.cantidad = contador
        console.log(product)
    }

    return ( 
        <div>
         <h4>{title}</h4>
         <img src={image}/>
         <Contador onAdd={onAdd}/>
        </div>
    )
}
 
export default ItemDetail;