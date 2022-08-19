import { useState, useEffect } from "react"
import { products } from "../../assets/productos"
import ItemList from "./ItemList"
import { dataFetch } from "../../assets/dataFetch"
import Page from "../../Page"



const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([])
    
    const [cargando, setCargando] = useState(true)

    useEffect(() =>{
        dataFetch(products)
        .then(data =>{
            setCargando(false)
            setListProducts(data)
        })       
    }, [])

    if(cargando){
        return(
            <h4>Cargando...</h4>
        )
    }else{
        return (  
            <Page titulo="Lo Ultimo en Videojuegos">
            <ItemList listProducts={listProducts}/>
            </Page>
        )
    }
}
 
export default ItemListContainer;