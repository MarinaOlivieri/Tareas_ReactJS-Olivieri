const Item = ({products}) =>{

    const { product, image, price } = products

    return (
        <article className="item">
            <h3>{product}</h3>
            <img src={image} />
            <p>${price} Dolares</p>
            <button className="btn btn-primary">Comprar</button>
        </article> 
     );
}
 
export default Item;