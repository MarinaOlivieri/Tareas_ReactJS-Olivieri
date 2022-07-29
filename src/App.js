import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'


const App = () =>{
    return(
        <>
            <Header />
            <Main />
            <Footer test={true} redes="redes sociales" />
        </>
    )
}
export default App;