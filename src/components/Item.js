const Item = ({products}) =>{

    return (
        <article className="item">
            <h3>{products.product}</h3>
            <img src={products.image} />
            <p>${products.price} Dolares</p>
            <button className="btn btn-primary">Comprar</button>
        </article> 
     );
}
 
export default Item;