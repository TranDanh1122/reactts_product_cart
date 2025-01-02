interface ProductItem {
    id: string,
    name: string,
    price: number,
    category: string,
    image: {
        thumbnail: string,
        mobile: string,
        tablet: string,
        desktop: string
    },

}

interface CartItem extends ProductItem {
    qty: number,
    total: number,
}
interface Cart {
    items: CartItem[],
    total: number
}
interface CartAction {
    key: "add" | "remove" | "clear";
    item?: CartItem;
}