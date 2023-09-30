"use client"

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/useCart";
 
import { Product } from "@/types";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface SummaryProps {
item:Product
}

const Summary:React.FC<SummaryProps> = ({item}) => {
    const searchParams = useSearchParams()
   
    const cart =  useCart();

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success('Payment Completed')
            cart.removeItem(item.id)
        }
        if (searchParams.get('canceled')) {
            toast.error('Something went wrong')
        }

    }, [searchParams, cart.removeItem])

   /*  const totalPrice = item.reduce((total, item) => {
        return total + Number(item.price)
    }, 0)
 */

    const onCheckout = async (item:Product) => {
        
         
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${item.storeId}/checkout`, {
            productId: item.id
        });

        window.location = response.data.url;
    }


    return (
        <div
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 className="text-lg font-medium text-gray-900">
                Order summary
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">Order total</div>
                    <Currency value={item.price} />
                </div>
            </div>
            <Button onClick={()=>onCheckout(item)} /* disabled={items.length === 0}  */className="w-full mt-6">
                Checkout
            </Button>
        </div>
    )
}

export default Summary