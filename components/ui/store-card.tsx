import { Store } from "@/types";
 

interface StoreCardprops {
  data: Store;
}

const StoreCard: React.FC<StoreCardprops> = ({ data }) => {
  return (
    <div
      /* onClick={handleClick} */ className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 justify-center"
    >
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
      <div className="flex flex-col items-center ">
        <p className="font-semibold text-lg">{data.name}</p>
        <div className="flex  text-center justify-center ">
          {data.category.length>0?data.category?.slice(0, 5).map((item) => (
            <span key={item.id} className="text-xs mx-1">
              {item.name}
            </span>
          )):<span className="text-xs mx-1">
           No Category
        </span>}
          <span className="text-xs"> ... </span>
        </div>
      </div>
       
       
    </div>
  );
};

export default StoreCard;
