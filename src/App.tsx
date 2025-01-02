import React from "react";
import ProductList from "./components/product/ProductList";
import "./styles.css"
import Cart  from "./components/cart/Cart";
import ConfirmModal from "./components/modal/Modal";
function App(): React.JSX.Element {

  return (
      <div className='container w-[90%] h-full max-w-[1250px] mx-auto flex flex-nowrap justify-between align-top gap-8 my-20 tb:flex-wrap tb:gap-y-8 mb:flex-wrap mb:gap-y-8'>
        <ProductList></ProductList>
        <Cart></Cart>
        <ConfirmModal></ConfirmModal>
      </div>
  )
}

export default App
