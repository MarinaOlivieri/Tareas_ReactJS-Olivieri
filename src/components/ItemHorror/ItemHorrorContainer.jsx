import ItemHorror from "./ItemHorror"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import {products} from "../../assets/productos"
import { dataFetch } from "../../assets/dataFetch"


const ItemHorrorContainer = () =>{

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
                <ItemHorror product={product}/>
            </>
        );
    }
}
export default ItemHorrorContainer;