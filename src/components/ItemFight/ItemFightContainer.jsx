import ItemFight from "./ItemFight"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import {products} from "../../assets/productos"
import { dataFetch } from "../../assets/dataFetch"

const ItemFightContainer = () =>{
    
    const [product, setProduct] = useState([])
    const [cargando, setCargando] = useState(true)
    const {category}=useParams()

    useEffect(() =>{
        dataFetch(products)
        .then(data =>{
            setCargando(false)
            setProduct(data.find(products=>products.category==category))
        })
    }, [category])
    if(cargando){
        return(
            <h4>Cargando...</h4>
        )
    }else{
        return ( 
            <>
                <ItemFight product={product}/>
            </>
        );
    }
}
 
export default ItemFightContainer;