import React, { useReducer } from "react";
import ProductList from "./components/product/ProductList";
import "./styles.css"
const cartReducer = (cart: Cart, action: CartAction): Cart => {
  switch (action.key) {
    case "add":
      console.log("add", action.item)
      return cart
    case "remove":
      console.log("remove", action.item)
      return cart
    case "clear":
      console.log("clear")
      return cart
  }
}
const initContext = {} as { cart: Cart, dispatch: React.Dispatch<CartAction> }
export const CartContext = React.createContext(initContext);
function App(): React.JSX.Element {
  const initialCart: Cart = { items: [], total: 0 };
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <div className='container w-[90%] h-full max-w-[1250px] mx-auto flex flex-nowrap justify-between align-top gap-8 my-20 tb:flex-wrap tb:gap-y-8 mb:flex-wrap mb:gap-y-8'>
      <ProductList></ProductList>
      </div>
    </CartContext.Provider>
  )
}

export default App
