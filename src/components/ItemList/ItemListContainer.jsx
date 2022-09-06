import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import Page from "../../Page"
import { db } from "../../Firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"

const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([])
    const [cargando, setCargando] = useState(true)
    const {id,} = useParams

    useEffect(() =>{

        const productosCollection = collection(db, "Productos")
        // const filtro = query(productosCollection,where("category", "==", id))
        const consulta = getDocs(productosCollection)

        consulta
        .then(snapshot=>{
            const productos = snapshot.docs.map(doc=>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            })
            setCargando(false)
            setListProducts(productos)
        })
        .catch(err=>{
            console.log(err)
        })      
    }, [id])

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