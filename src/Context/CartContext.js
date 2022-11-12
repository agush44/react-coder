import { createContext, useState } from "react";  

export const CartContext = createContext({
    cart: [],
    isInCart: () => {},
    addToCart: () => {}
});

export default function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const getFromCart = (id) => {
        return cart.filter(ord => ord.id === id) 
    }

    const isInCart = (id) => {
        return id !== undefined ? getFromCart(id) : undefined;
    }

    const addToCart = (item, cantidad) =>{
        if(isInCart(item && item.id)){
            console.log('Item con id ya existente');
            return;
        }
        // No existe elemento con ese id
        setCart([...cart, item]);
        console.log('Item agregado')
    };

    const clear = () => {
        setCart([]);
    }

    return <CartContext.Provider value = {{cart, addToCart, isInCart, clear}}>
        {children}
    </CartContext.Provider>
}