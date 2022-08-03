import {useState} from 'react'
 
const Contador = () => {

    const [contador, setContador] = useState(0)

    return ( 
        <div className='container my-5'>
            <div className="card text-center my-5">
                <div className="card-body">
                <h1>Nuestro Contador</h1>
                    <div className="my-5">
                        <h2 className='my-5'>{contador}</h2>
                        <button className='btn btn-success mx-3' onClick={() => setContador(contador + 1)}>
                            Aumentar
                        </button>
                        <button className='btn btn-danger mx-3' onClick={() => setContador(contador - 1)} disabled={contador === 0}>
                            Restar
                        </button>
                        <button className='btn btn-secondary mx-3' onClick={() => setContador(0)} disabled={contador === 0}>
                            Limpiar
                        </button>
                    </div>
                </div>   
            </div>
        </div>
    );
}
 
export default Contador;