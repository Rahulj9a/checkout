import { Product } from "@/types"
import Currency from "./currency"
import IconButton from "./icon_button"
import { AiOutlineShoppingCart } from "react-icons/ai"

interface infoProps {
    data: Product
}

const Info:React.FC<infoProps> = ({data}) => {
    return (
        <div>
            <h1 className="font-bold text-gray-900 text-xl md:text-3xl">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="font-semibold text-gray-900 text-lg md:text-xl">
                    <Currency value={data.price}/>
                </p> 
            </div>
            <hr/>
            <div className="flex items-center text-lg my-6 gap-y-6 flex-col md:flex-row justify-around">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold">Size:</h3>
                    <span>{data.size.name}</span> 
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold">Color:</h3>
                    <span><div className="w-6 h-6 rounded-full" style={{backgroundColor:data.color.value}}></div></span> 
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <button className="flex items-center border-2 outline-double rounded-xl py-2 px-4 justify-center gap-x-2">
                    Add to cart
                    <AiOutlineShoppingCart size={20}/>
                </button>
            </div>
        </div>
    )
}

export default Info