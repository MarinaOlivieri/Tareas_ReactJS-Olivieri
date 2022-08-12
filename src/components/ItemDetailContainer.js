import ItemDetail from "./ItemDetail"
import { products } from "../assets/productos"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"



const ItemDetailContainer = () =>{

    const [listProducts, setListProducts] = useState([id])
    const [cargando, setCargando] = useState(true)
    const {id}=useParams()

    useEffect(() =>{
        
        const data = new Promise((res, rej) =>{
                setTimeout(() =>{
                    res(products)
                }, 2000)
            })
        

        data.then((res) =>{
            setListProducts(res.find(item=>item.id==id))
            setCargando(false)
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
            <ItemDetail listProducts={listProducts}/>
            </>
        )
    }

}
 
export default ItemDetailContainer;