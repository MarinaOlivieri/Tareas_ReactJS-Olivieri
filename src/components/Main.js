import {Routes, Route} from "react-router-dom"
import ItemListContainer from './ItemListContainer'
import Cart from "./Cart"
import ItemDetailsContainer from "./ItemDetailContainer"

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/detalle/:id" element={<ItemDetailsContainer/>}/>
                <Route path="/ps5" element={<></>}/>
            </Routes>
        </main>
    )
}
export default Main;