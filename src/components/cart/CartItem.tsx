import React from "react";
import { CartContext } from "../../CartContext.tsx";
import { getImage } from "../../helpers/helper.ts";
interface CartItemProps {
    item: CartItem,
    isModel: boolean
}
const CartItem = React.memo(({ item, isModel }: CartItemProps): React.JSX.Element => {
        const { checkOut, setCart } = React.useContext(CartContext)
        const removeItem = () => setCart({ key: "remove", item: item })
        return (
            <div className="border-b-[1px] border-solid border-rose100 flex items-center justify-start w-full">
                {(checkOut && isModel) ? <img src={getImage(item.image)} alt={item.name} className="w-12 h-12 object-cover mr-2" /> : ''}
                <div className="flex flex-wrap gap-y-2 gap-2 py-4 ">
                    <h4 className="text-4-bold w-full ">{item.name}</h4>
                    <span className="text-4-bold text-red">{item.qty}x</span>
                    <span className="text-4 text-rose500">@ ${item.price}</span>
                    {(!checkOut && isModel) ? <span className="text-4-bold">${item.total}</span> : ''}
                </div>
                {(checkOut && isModel)
                    ? <span className="text-4-bold ml-auto">${item.total}</span>
                    :
                    <div className="p-1 border-solid border-2 border-rose400 rounded-[50%] ml-auto" onClick={() => removeItem()}>
                        <i className="block w-[10px] h-[10px] bg-rose400" onClick={() => removeItem()} style={{ mask: "url(./assets/images/icon-remove-item.svg) center / cover no-repeat", WebkitMask: "url(./assets/images/icon-remove-item.svg) center / cover no-repeat" }}></i>
                    </div>

                }

            </div>

        )
    }
)
export default CartItem