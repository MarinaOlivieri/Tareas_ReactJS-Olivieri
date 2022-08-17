import ItemDetail from "./ItemDetail"
import { products } from "../assets/productos"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { dataFetch } from "../assets/dataFetch"



const ItemDetailContainer = () =>{

    const [product, setProduct] = useState({})
    const [cargando, setCargando] = useState(true)
    const {id}=useParams()

    useEffect(() =>{
    dataFetch(products)
    .then(data =>{
        setCargando(false)
        setProduct(data.find(products=>products.id==id))
    })
}, [id])
    if(cargando){
    return(
        <h4>Cargando...</h4>
    )
    }else{
        return (  
            <>
                <h2>Lo ultimo en Videojuegos</h2>
                <ItemDetail product={product}/>
            </>
        )
    }
    
}


 
export default ItemDetailContainer;