import {Link} from "react-router-dom"

const Item = ({products}) =>{

    const { product, image, price, id } = products

    return (
        <article className="item">
            <h3>{product}</h3>
            <img src={image} />
            <p>${price} Dolares</p>
            <Link to={"/detalle/"+ id}> 
            <button className="btn btn-primary">Ver detalle</button>
            </Link>
        </article> 
     );
}
 
export default Item;