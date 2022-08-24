import ItemAventure from "./ItemAventure"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import {products} from "../../assets/productos"
import { dataFetch } from "../../assets/dataFetch"
import Page from "../../Page"


const ItemAventureContainer = () =>{
    const [product, setProduct] = useState([])
    const [cargando, setCargando] = useState(true)
    const {category}=useParams()

    useEffect(() =>{
        dataFetch(products)
        .then(data =>{
            setCargando(false)
            setProduct(data.find(products=>products.category=="Accion"))
        })
    }, [category])
    if(cargando){
        return(
            <h4>Cargando...</h4>
        )
    }else{
        return ( 
            <Page titulo="Catalogo" subtitulo="Juegos de Aventura">
                <ItemAventure product={product}/>
            </Page>
        );
    }    
}
 
export default ItemAventureContainer;