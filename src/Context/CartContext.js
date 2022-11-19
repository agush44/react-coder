import { createContext, useState } from "react";  

export const CartContext = createContext({
    cart: [],
    isInCart: () => {},
    addToCart: () => {},
    stockDeProducto: () => {}
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

    const stockDeProducto = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.stock;
    };

    const addToCart = (item, cantidad) =>{
        
        if(isInCart(item.id)){
            console.log('Item con id ya existente');
            let prodInCart = cart.find(prod => prod.id === item.id);
            if(prodInCart.stock > 0){
                prodInCart.cantidad += cantidad;       
                prodInCart.stock -= cantidad;
            }else{
                console.log("no hay stock")
            }
            console.log(prodInCart)
        }else{
            item.stock -= cantidad;
            console.log(cart)
            setCart([...cart, item]);
            console.log('Item agregado')  
        }
    };

    const clear = () => {
        setCart([]);
    }

    return <CartContext.Provider value = {{cart, addToCart, isInCart, stockDeProducto, removeItem, clear}}>
        {children}
    </CartContext.Provider>
}

export {CartProvider};