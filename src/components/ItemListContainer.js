import { dataFetch }  from "../assets/dataFetch"
import { useState, useEffect } from "react"
import { products } from "../assets/productos"
import ItemList from "./ItemList"


const ItemLIstContainer = () =>{

    const [listProducts, setListProducts] = useState([])

    useEffect(() =>{
        dataFetch(products)
            .then(data => setListProducts(data))
    }, [])

    return (  
        <>
        <h2>Lo ultimo en Videojuegos</h2>
        <ItemList listProducts={listProducts}/>
        </>
    )
}
 
export default ItemLIstContainer;