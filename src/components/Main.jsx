import {Routes, Route} from "react-router-dom"
import ItemListContainer from './ItemList/ItemListContainer'
import Cart from "./Cart"
import ItemDetailsContainer from "./ItemDetail/ItemDetailContainer"

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/detalle/:id" element={<ItemDetailsContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/Fight/:category" element={<ItemListContainer/>}/>
                <Route path="/Accion/:category" element={<ItemListContainer/>}/>
                <Route path="/SurvivorHorror/:category" element={<ItemListContainer/>}/>
            </Routes>
        </main>
    )
}
export default Main;