import React from "react"
const initContext = {} as { cart: Cart, setCart: React.Dispatch<CartAction>, checkOut: boolean, isCheckOut: React.Dispatch<React.SetStateAction<boolean>> };
const saveCart = (cart: Cart) => localStorage.setItem('cart', JSON.stringify(cart))

const cartReducer = (cart: Cart, action: CartAction): Cart => {
    switch (action.key) {
        case "add": {
            if (action.item) {
                const index = cart.items.findIndex(item => item.id === (action.item?.id ?? 0));
                const items = [...cart.items] as CartItem[];
                if (index > -1) {
                    items[index] = { ...items[index], qty: action.item.qty, total: action.item.total };
                } else {
                    items.push(action.item);
                }
                const newCart = {
                    ...cart,
                    items: items,
                    total: items.reduce((sum: number, item: CartItem) => sum + item.qty, 0)
                }
                saveCart(newCart)
                return newCart;
            }
            return { ...cart };
        }
        case "remove": {
            const items = cart.items.filter(item => item.id !== (action.item?.id ?? 0));
            const newCart = {
                ...cart,
                items: items,
                total: items.reduce((sum: number, item: CartItem) => sum + item.qty, 0)
            }
            saveCart(newCart)
            return newCart;
        }
        case "clear": {
            cart.items = [];
            cart.total = 0;
            const newCart = {
                ...cart,
                items: [],
                total: 0
            };
            saveCart(newCart)
            return newCart
        }
        default:
            return { ...cart };
    }
}

export const CartContext = React.createContext(initContext);
interface CartProviderProps {
    children: React.ReactNode
}
const CartProvider: React.FC<CartProviderProps> = ({ children }): React.JSX.Element => {
    const memoryCart = (): Cart => {
        const cart = localStorage.getItem('cart')
        return cart ? JSON.parse(cart) as Cart : { items: [], total: 0 } as Cart;
    }
    const initialCart: Cart = memoryCart();
    const [cart, setCart] = React.useReducer(cartReducer, initialCart);
    const [checkOut, isCheckOut]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState(false)
    return (
        <CartContext.Provider value={{ cart, setCart, checkOut, isCheckOut }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider