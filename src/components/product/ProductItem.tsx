import React from "react";
import { getImage } from "../../helpers/helper.js";
interface ProductItemProps {
    item: ProductItem
}
const ProductItem: React.FC<ProductItemProps> = React.memo(({ item }): React.JSX.Element => {
    const [addToCart, isAdd] = React.useState(false)
    return (
        <div className="w-[calc(33.33%-1rem)] mb:w-full ">
            <div className="overflow-hidden">
                <img loading="lazy" src={getImage(item.image)} alt={item.name} className={`w-full h-full object-cover ${addToCart ? 'border-2 border-solid border-red' : ''}  hover:scale-150`} />
            </div>
            {(addToCart)
                ?
                <div className="relative translate-y-[-50%] w-1/2 mx-auto">
                    <span className=" w-5 h-5 border-white border-solid border-2 rounded-[50%] absolute top-[calc(50%-10px)] left-4 flex items-center justify-center" >
                        <i className="block w-[10px] h-[2px] bg-white " style={{ mask: "url('./assets/images/icon-decrement-quantity.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-decrement-quantity.svg') center / cover no-repeat" }}></i>
                    </span>
                    <input type="text" name={`qty_${item.id}`} className="w-full py-3 px-12 bg-red text-4-bold text-white outline-none border-none text-center rounded-3xl" />
                    <span className=" w-5 h-5 border-white border-solid border-2 rounded-[50%] absolute top-[calc(50%-10px)]  right-4 flex items-center justify-center" >
                        <i className="block w-[10px] h-[10px] bg-white " style={{ mask: "url('./assets/images/icon-increment-quantity.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-increment-quantity.svg') center / cover no-repeat" }}></i>
                    </span>
                </div>
                :
                <button onClick={() => isAdd(!addToCart)} className="w-max mx-auto bg-white text-4-bold translate-y-[-50%] border-[1px] border-solid border-rose400 flex flex-nowrap items-center justify-center gap-2 py-3 px-7 rounded-3xl">
                    <i className="block w-5 h-5 bg-red" style={{ mask: "url('./assets/images/icon-add-to-cart.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-add-to-cart.svg') center / cover no-repeat" }}></i>
                    Add To Cart
                </button>
            }
            <span className="text-4 text-rose500 capitalize">{item.category}</span>
            <h3 className="text-3 mt-1">{item.name}</h3>
            <span className="mt-1 text-3 text-red">${item.price.toFixed(2)}</span>
        </div>
    )
})
export default ProductItem