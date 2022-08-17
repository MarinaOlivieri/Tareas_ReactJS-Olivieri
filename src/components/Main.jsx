import {Routes, Route} from "react-router-dom"
import ItemListContainer from './ItemList/ItemListContainer'
import Cart from "./Cart"
import ItemDetailsContainer from "./ItemDetail/ItemDetailContainer"
import ItemHorrorContainer from "./ItemHorror/ItemHorrorContainer"
import ItemAventureContainer from "./ItemAventure/ItemAventureContainer"
import ItemFightContainer from "./ItemFight/ItemFightContainer"

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/detalle/:id" element={<ItemDetailsContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/Fight/:category" element={<ItemFightContainer/>}/>
                <Route path="/Aventure/:category" element={<ItemAventureContainer/>}/>
                <Route path="/SurvivorHorror/:category" element={<ItemHorrorContainer/>}/>
            </Routes>
        </main>
    )
}
export default Main;