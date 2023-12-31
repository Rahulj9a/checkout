"use client"

import { Product } from "@/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Currency from "./currency"
import { MouseEventHandler } from 'react'
import { BiExpand } from "react-icons/bi"
import IconButton from "./icon_button"
import usePreviewModal from "@/hooks/usePreviewModal"
import { AiOutlineShoppingCart } from "react-icons/ai"
import useCart from "@/hooks/useCart"
interface ProductCardprops {
  data: Product
}

const ProductCard: React.FC<ProductCardprops> = ({ data }) => {

  const router = useRouter()
  const previewModal = usePreviewModal()
  const cart = useCart()
  const productId = data.id
  const handleClick = () => {
    router.push(`/product/${productId}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data)
  }
  const onAddToCart = () => {
    cart.addItem(data)
  }

  return (

    <div onClick={handleClick} className="bg-white group sm:flex-col justify-between flex cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.image?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 sm:group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<BiExpand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<AiOutlineShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard