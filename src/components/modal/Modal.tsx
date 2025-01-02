import { useContext } from "react"
import { CartContext } from "../../CartContext.tsx"
import CartItem from "../cart/CartItem.tsx"
const ConfirmModal = () => {
    const { isCheckOut, checkOut, cart, setCart } = useContext(CartContext)
    if (!checkOut) return '';
    const newOrder = () => setCart({ key: "clear" })
    return (
        <div>
            <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10" onClick={() => isCheckOut(!checkOut)}></div>
            <div className="bg-white w-1/2 tb:w-[90%] mb:w-full h-max rounded-lg fixed z-20 bottom-[25%] mb:bottom-0 left-[25%] tb:left-[5%] mb:left-0 p-10">
                <i className="w-12 h-12 block bg-green" style={{ mask: "url(./assets/images/icon-order-confirmed.svg) center / cover no-repeat", WebkitMask: "url(./assets/images/icon-order-confirmed.svg) center / cover no-repeat" }}></i>
                <h2 className="text-1 mt-6 mb-2">Order Confirmed</h2>
                <span className="text-rose500 mb-8">We hope you enjoy your food!</span>
                <div className="bg-rose50 p-6 rounded-lg">
                    {cart.items.map((item: CartItem) => <CartItem key={item.id} item={item} isModel={true}></CartItem>)}
                    <div className="flex flex-nowrap my-6 justify-between items-center ">
                        <span className="text-4">Order Total</span>
                        <span className="text-2">${cart.total}</span>
                    </div>
                </div>
                <button className="text-3 w-full text-white bg-red py-4 rounded-3xl mt-8" onClick={() => newOrder()}>Start New Order</button>
            </div>
        </div>
    )
}
export default ConfirmModal