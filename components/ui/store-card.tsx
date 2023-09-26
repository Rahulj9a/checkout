"use client"

import { Store } from "@/types";
import { useRouter } from "next/navigation";


interface StoreCardprops {
  data: Store;
}

const StoreCard: React.FC<StoreCardprops> = ({ data }) => {
   
  const router = useRouter()

  const handleClick = ()=>{
    router.push(`/stores/${data.id}`)
  }
  return (
    <div
      onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 justify-center"
    >


      {/* Description */}
      <div className="flex justify-between gap-x-6 items-center ">
        <p className="font-semibold text-3xl">{data.name}</p>
        <div className="flex flex-col  text-center justify-center">
           <p className="text-sm">Categories: <span>{data.category?.length}</span></p>
           <p className="text-sm">Products: <span>{data.product?.length}</span></p>
        </div>
      </div>


    </div>
  );
};

export default StoreCard;
