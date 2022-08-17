const ItemDetail = ({product}) =>{

    const {image, title} = product

    return ( 
        <div>
         <h4>{title}</h4>
         <img src={image}/>
        </div>
    )
}
 
export default ItemDetail;