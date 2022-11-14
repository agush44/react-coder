import { createContext, useState } from "react";  

export const CartContext = createContext({
    cart: [],
    isInCart: () => {},
    addToCart: () => {}
});

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    // const getFromCart = (id) => {
    //     return cart.filter(ord => ord.id === id) 
    // }

    const isInCart = (id) => {
        // return id !== undefined ? getFromCart(id) : undefined;
        return cart.some((el) => el.id === id)
    }

    const addToCart = (item, cantidad) =>{
        
        if(isInCart(item.id)){
            console.log('Item con id ya existente');
            let prodInCart = cart.find(prod => prod.id === item.id);
            console.log(prodInCart)
            prodInCart.cantidad += cantidad;           
            
        }else{
           // No existe elemento con ese id
            setCart([...cart, item]);
            console.log('Item agregado')  
            console.log(cart)       
        }
        
    };

    const clear = () => {
        setCart([]);
    }

    return <CartContext.Provider value = {{cart, addToCart, isInCart, clear}}>
        {children}
    </CartContext.Provider>
}

export {CartProvider};