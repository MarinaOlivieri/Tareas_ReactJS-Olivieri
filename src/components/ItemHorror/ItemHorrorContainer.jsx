import ItemHorror from "./ItemHorror"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import {products} from "../../assets/productos"
import { dataFetch } from "../../assets/dataFetch"
import Page from "../../Page"


const ItemHorrorContainer = () =>{

    const [product, setProduct] = useState([])
    const [cargando, setCargando] = useState(true)
    const {category}=useParams()

    useEffect(() =>{
        dataFetch(products)
        .then(data =>{
            setCargando(false)
            setProduct(data.find(products=>products.category=="Survivor Horror"))
        })
    }, [category])
    if(cargando){
        return(
            <h4>Cargando...</h4>
        )
    }else{
        return ( 
            <Page titulo="Catalogo" subtitulo="Juegos de Terror">
                <ItemHorror product={product}/>
            </Page>
        );
    }
}
export default ItemHorrorContainer;