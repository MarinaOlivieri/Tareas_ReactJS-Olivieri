import Page from "../Page";

const Cart = () =>{

    const handleClick = (e) =>{
      console.log(e)

    }

    const handleChange = (e) =>{
      console.log(e)
    }
    
    return( 
        <>
        <Page titulo="Carrito" subtitulo="Comience a comprar"> 
        <input type="text" onChange={handleChange} />
        <button className="btn btn-primary" onClick={handleClick}>Click</button>
        </Page>
        </>
    )
}
 
export default Cart;