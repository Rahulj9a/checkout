import { Product } from "@/types"
import useCart from "@/hooks/useCart"
import Image from "next/image"
import { AiOutlineDelete } from "react-icons/ai"
import IconButton from "@/components/ui/icon_button"
import Currency from "@/components/ui/currency"

interface CartItemProps {
    data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const cart = useCart()
    const onRemove = () => {
        cart.removeItem(data.id)
    }
    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 bg-white rounded-mg overflow-hidden sm:h-48 sm:w-48">
                <Image src={data.image[0].url} alt={data.name} fill className="object-cover object-center" />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0 ">
                    <IconButton onClick={onRemove} icon={<AiOutlineDelete size={30} fill="red" />} />
                </div>
                <div className="relative pr-9 flex flex-col items-center sm:gap-y-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-xl text-semibold text-gray-800">
                            {data.name}

                        </p>
                    </div>
                    <div className="mt-1 flex justify-around text-sm">
                        <p className="text-gray-500">{data.size.name}</p>
                        <p className="ml-4 pl-4 text-gray-500">{data.color.name}</p>
                    </div>
                    <Currency value={data.price} />
                </div>

            </div>
        </li>
    )
}

export default CartItem