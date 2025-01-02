import React from "react";
import { CartContext } from "../../CartContext.tsx";
import CartItem from "./CartItem";
const Cart = (): React.JSX.Element => {
    const { cart, checkOut, isCheckOut }: { cart: Cart, checkOut: boolean, isCheckOut: React.Dispatch<React.SetStateAction<boolean>> } = React.useContext(CartContext)
    if (!cart || !cart.items || !cart.items.length) return (
        <div className="bg-white rounded-md p-6 w-[calc(30%-1rem)] h-max tb:w-full mb:w-full">
            <h2 className="text-2 text-red">Your Cart(0)</h2>
            <div className="flex items-center justify-center w-full h-full flex-col mt-6">
                <img src="./assets/images/illustration-empty-cart.svg" alt="empty-cart" className="w-32 h-32 object-cover" />
                <span className="text-4-bold text-rose500">Your added items will appear here</span>
            </div>
        </div>
    )
    return (
        <div className="bg-white rounded-md p-6 w-[calc(30%-1rem)] h-max tb:w-full mb:w-full">
            <h2 className="text-2 text-red">Your Cart({cart.total})</h2>
            <div className="flex flex-nowrap flex-col items-start justify-start">
                {cart.items.map((item: CartItem) => <CartItem key={item.id} item={item} isModel={false} ></CartItem>)}
            </div>
            <div className="flex flex-nowrap my-6 justify-between items-center ">
                <span className="text-4">Order Total</span>
                <span className="text-2">${cart.total}</span>
            </div>
            <span className="text-4 flex gap-2 items-center justify-center py-4 w-full bg-rose50 mb-6 mb:flex-wrap">
                <i className="block w-5 h-5 bg-green" style={{ mask: 'url("./assets/images/icon-carbon-neutral.svg") center / cover no-repeat', WebkitMask: 'url("./assets/images/icon-carbon-neutral.svg") center / cover no-repeat' }}></i>
                This is a <span className="text-4-bold">carbon-neutral</span> delivery
            </span>
            <button className="text-3 w-full text-white bg-red py-4 rounded-3xl" onClick={() => isCheckOut(!checkOut)}>Confirm Order</button>
        </div>
    )
}
export default Cart