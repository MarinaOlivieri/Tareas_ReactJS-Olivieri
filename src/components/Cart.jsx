import { useContext } from "react";
import Page from "../Page";
import { context } from "./CartContext";
import { Link } from "react-router-dom";


const Cart = () =>{

    // const {image, title, price} = product

    const {cart, deleteProduct, clearCart} = useContext(context)

    if (cart.length > 0) {
        return(
            <div className="container-cart col-xl-8">
                {
                    cart.map((product, index) =>{
                        return <div className="cart-card col-xl-6 d-flex aling-items-center" key={index}>
                            <div>
                                <img className="img-cart" src={product.image} alt={product.title} width={150}/>
                            </div>
                            <div>
                                <h5>{product.title}</h5>
                                <h4>Precio: ${product.price}</h4>
                                <h5>Unidades: {product.cantidad}</h5>
                            </div>
                            <div>
                                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    })
                }
                <button onClick={() => clearCart()} className="btn btn-warning">Vaciar Carrito</button>
            </div>
        )
    }
    return( 
        <Page titulo="Carrito" subtitulo="Comience a comprar"> 
            <Link to={'/'}><button className="btn btn-success">Ir al inicio</button></Link>
        </Page>
        
    )
}
 
export default Cart;