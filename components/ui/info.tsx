"use client"

import { Product } from "@/types"
import Currency from "./currency"
 
import { AiOutlineShoppingCart } from "react-icons/ai"
import useCart from "@/hooks/useCart"
import Button from "./button"
import { useRouter } from "next/navigation"

interface infoProps {
    data: Product
}

const Info: React.FC<infoProps> = ({ data }) => {
    const router = useRouter()
    const cart = useCart()
    const addToCart = () => {
        cart.addItem(data)
    }
    const handleClick=(link:string)=>{
        router.push(link)
    }
    return (
        <div>
            <h1 className="font-bold text-gray-900 text-xl md:text-3xl">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="font-semibold text-gray-900 text-lg md:text-xl">
                    <Currency value={data.price} />
                </p>
            </div>
            <hr />
            <div className="flex items-center text-lg my-6 gap-y-6  flex-col md:flex-row justify-around">
                <div className="flex items-center gap-x-4">
                   <h3 className="font-semibold">Size:</h3>
                    <span>{data.size.name}</span>
                </div> 
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold">Color:</h3>
                    <span><div className="w-6 h-6 rounded-full" style={{ backgroundColor: data.color.value }}></div></span>
                </div>
                  
            </div>
            <div className="flex items-center text-lg my-6 gap-y-6  flex-col md:flex-row justify-around">
                <div className="flex items-center gap-x-4 cursor-pointer" onClick={()=>handleClick(`/stores/${data.storeId}`)}>
                   <h3 className="font-semibold">Explore related Store</h3>
                     
                </div> 
                <div className="flex items-center gap-x-4 cursor-pointer"  onClick={()=>handleClick(`/stores/${data.storeId}/category/${data.categoryId}`)}>
                    <h3 className="font-semibold">Explore related Category</h3>
                    
                </div>
                  
            </div>
            
            <div className="mt-10 flex items-center gap-x-3">

                <Button className="w-full" onClick={addToCart}> Add to cart  
                    <AiOutlineShoppingCart className="mx-2" size={20} /></Button>
            </div>
        </div>
    )
}

export default Info