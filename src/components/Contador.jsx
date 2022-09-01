import {useState} from 'react'
 
const Contador = ({onAdd, cantidad,}) => {

  

    const [contador, setContador] = useState(cantidad)

    const aumentar = () =>{
        setContador(contador + 1)
    }

    const restar = () =>{
        setContador(contador - 1)
    }

    const confirmar = () =>{
        onAdd(contador)
    }
    return ( 
        <div className='container my-5'>
            
            <div className="my-5">
                <p>Seleccionaste {contador} unidades</p>
                <button className='btn btn-success mx-3' onClick={aumentar}>
                Aumentar
                </button>
                <button className='btn btn-danger mx-3' onClick={restar} disabled={contador === 0}>
                Restar
                </button>
                <button className='btn btn-secondary mx-3' onClick={confirmar} disabled={contador === 0}>
                Confirmar
                </button>
            </div>
        </div>
    );
}
 
export default Contador;