import { createContext, useState } from "react";  

export const CartContext = createContext({
    cart: [],
    isInCart: () => {},
    addToCart: () => {}
});

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((el) => el.id === id)
    }

    const removeItem = (item) =>{
        const nuevoCarrito = cart.filter((prod) => prod.id !== item.id);
        setCart(nuevoCarrito);
    }

    const addToCart = (item, cantidad) =>{
        
        if(isInCart(item.id)){
            console.log('Item con id ya existente');
            let prodInCart = cart.find(prod => prod.id === item.id);
            console.log(prodInCart)
            prodInCart.cantidad += cantidad;           
            
        }else{
            setCart([...cart, item]);
            console.log('Item agregado')  
        }
    };

    const clear = () => {
        setCart([]);
    }

    return <CartContext.Provider value = {{cart, addToCart, isInCart, removeItem, clear}}>
        {children}
    </CartContext.Provider>
}

export {CartProvider};