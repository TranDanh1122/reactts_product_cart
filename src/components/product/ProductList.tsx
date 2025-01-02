
import React, { useEffect } from "react"
import ProductItem from "./ProductItem"

const ProductList = (): React.JSX.Element => {
    const [product, setProduct] = React.useState([] as ProductItem[])
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const dataMapped = data.map((item: ProductItem, index: number) => {
                    return { ...item, id: index }
                })
                setProduct(dataMapped)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="w-[calc(70%-1rem)] tb:w-full mb:w-full">
            <h2 className="text-1 mb-8">Desserts</h2>
            <div className="w-full flex flex-wrap items-baseline justify-between gap-6 gap-y-8">
                {product.map((item: ProductItem) => {
                    return <ProductItem key={item.id} item={item}></ProductItem >
                })}
            </div>
        </div>


    )
}
export default ProductList