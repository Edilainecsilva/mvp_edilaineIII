import {createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    //cart state
    const [cart, setCart] = useState([]);

    //item amount state
    const [itemAmount, setItemAmount] = useState(0);

    //total preço state
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0)
        setTotal(total)
    }, [cart])

    //update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.amount;
        }, 0);
        setItemAmount(amount)
        }
    }, [cart])

    //add ao carrinho
    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}
        //check se o item já está no carrinho
        const CartItem = cart.find((item) => {
            return item.id === id;
        })
        //se o item já estiver no carrinho
        if (CartItem) {
            const newCart = [...cart].map(item=> {
                if (item.id === id) {
                    return {...item, amount: CartItem.amount + 1 }
                } else {
                    return item;
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem])
        }
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id;
        })
        setCart(newCart)
    }

    //limpar carrinho
    const clearCart = () => {
        setCart([])
    }
    
    //aumentar a quantidade 
    const increaseAmount = (id) => {
        const CartItem = cart.find((item) => item.id === id)
        addToCart(CartItem, id)
    }

    //diminiur quantidade
    const decreaseAmount = (id) => {
        const CartItem = cart.find(item => {
            return item.id === id;
        })
        if (CartItem) {
            const newCart = cart.map((item) => {
                if(item.id === id) {
                    return { ...item, amount: CartItem.amount - 1}
                } else {
                    return item;
                }
            });
            setCart(newCart)
        } 
        
        if (CartItem.amount < 2) {
            removeFromCart(id)
        }
        
    }

    return (
        <CartContext.Provider 
        value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            clearCart, 
            increaseAmount, 
            decreaseAmount, 
            itemAmount,
            total, 
            
            }}>
            { children }
        </CartContext.Provider>
    )
}


export default CartProvider;