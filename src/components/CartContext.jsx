import { createContext } from 'react';
import { useState } from 'react';


export const context = createContext()
const {Provider} = context

const CartContext = (props) =>{

    const [cart, setCart] = useState([])

    const isInCart = (id) =>{
        return cart.some(product => product.id === id)
    }

    const clearCart = () =>{
        return setCart([])
    }

    const addProduct = (product, cantidad) =>{
        const newProduct = {
            ...product,
            cantidad
        }
        if(isInCart(newProduct.id)){
            const findProduct = cart.find(product => product.id === newProduct.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].cantidad += cantidad 
            setCart(auxArray)
        }else{
            setCart([...cart, newProduct])
        }
    }

    const deleteProduct = (id) =>{
        return setCart(cart.filter(product => product.id !== id ))
    }
    
    const productQty = () =>{
        return cart.reduce((acc, product) => acc += product.cantidad, 0)
    }

    const totalPrice = () =>{
        return cart.reduce((acc, product) => acc += product.cantidad * product.price, 0)
    }

    return (  
        <Provider value={{cart, isInCart, addProduct, clearCart, deleteProduct, productQty, totalPrice}}>
            {props.children}
        </Provider>
    )
}
 
export default CartContext;