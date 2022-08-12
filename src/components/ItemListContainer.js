import { useState, useEffect } from "react"
import { products } from "../assets/productos"
import ItemList from "./ItemList"


const ItemLIstContainer = () =>{

    const [listProducts, setListProducts] = useState([])
    
    const [cargando, setCargando] = useState(true)

    useEffect(() =>{
        
        const data = new Promise((res, rej) =>{
                setTimeout(() =>{
                    res(products)
                }, 2000)
            })
        

        data.then((res) =>{
            setListProducts(res)
            setCargando(false)
        })
            
    }, [])

    if(cargando){
        return(
            <h4>Cargando...</h4>
        )
    }else{
        return (  
            <>
            <h2>Lo ultimo en Videojuegos</h2>
            <ItemList listProducts={listProducts}/>
            </>
        )
    }
}
 
export default ItemLIstContainer;