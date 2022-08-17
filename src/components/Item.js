import {Link} from "react-router-dom"

const Item = ({products}) =>{

    const { title, image, price, id } = products

    return (
        <article className="item">
            <h3>{title}</h3>
            <img src={image} />
            <strong>${price} Dolares</strong>
            <Link to={`/detalle/${id}`}> 
            <button className="btn btn-primary">Ver detalle</button>
            </Link>
        </article> 
    );
}
 
export default Item;