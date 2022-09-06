import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import Page from "../../Page"
import { db } from "../../Firebase"
import { collection, getDoc, doc } from "firebase/firestore"

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState({})
    const [cargando, setCargando] = useState(true)
    const {id}=useParams()

    useEffect(() =>{

        const productosCollection = collection(db, "Productos")
        const referencia = doc(productosCollection,id)
        const consulta = getDoc(referencia)

        consulta
        .then(snapshot=>{
            setCargando(false)
            setProduct(snapshot.data())
    
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])

    if(cargando){
        return(
            <h4>Cargando...</h4>
        )
    }else{
        return (  
            <Page titulo="Lo ultimo en Videojuegos">
                <ItemDetail product={product}/>
            </Page>
        )
    }
}

export default ItemDetailContainer;