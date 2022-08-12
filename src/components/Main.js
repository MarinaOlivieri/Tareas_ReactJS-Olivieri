import {Routes, Route} from "react-router-dom"
import ItemDetail from "./ItemDetail"
import ItemLIstContainer from './ItemListContainer'
import Cart from "./Cart"

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemLIstContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/detalle/:id" element={<ItemDetail/>}/>
                <Route path="/ps5" element={<></>}/>
            </Routes>
        </main>
    )
}
export default Main;