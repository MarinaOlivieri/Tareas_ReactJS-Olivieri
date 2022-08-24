import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import CartContext from './components/CartContext';

const App = () =>{
    return(
        <BrowserRouter>
            <CartContext>
                <Header/>
                <Main/>
                <Footer test={true} redes="redes sociales"/>
            </CartContext>
        </BrowserRouter>
    )
}
export default App;