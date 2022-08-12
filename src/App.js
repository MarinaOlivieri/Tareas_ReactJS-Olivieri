import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';



const App = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer test={true} redes="redes sociales"/>
        </BrowserRouter>
    )
}
export default App;