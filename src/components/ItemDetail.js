const ItemDetail = ({product}) =>{

    const {image, title} = product

    return ( 
        <div>
         <h4>{title}</h4>
         <img src={image} alt="" />
        </div>
    )
}
 
export default ItemDetail;