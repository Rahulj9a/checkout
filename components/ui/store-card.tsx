import { Store } from "@/types"


interface StoreCardprops{
    data:Store
}

const StoreCard:React.FC<StoreCardprops> = ({data}) =>{
 
  
    return(
         
        <div /* onClick={handleClick} */ className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        {/* Image & actions */}
        <div className=" rounded-xl bg-gray-100 relative">
           
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <button 
               /*  onClick={onPreview} 
                icon={<Expand size={20} className="text-gray-600" />} */
              />
              <button
                /* onClick={onAddToCart} 
                icon={<ShoppingCart size={20} className="text-gray-600" />}  */
              />
            </div>
          </div>
        </div>
        {/* Description */}
        <div>
          <p className="font-semibold text-lg">{data.name}</p>
          
        </div>
        {/* Price & Reiew */}
        <div className="flex items-center justify-between">
          {/* <Currency value={data?.price} /> */}
        </div>
      </div>
    )
}

export default StoreCard