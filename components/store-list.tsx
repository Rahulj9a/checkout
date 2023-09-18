import { Store } from "@/types"
import StoreCard from "./ui/store-card"

interface StoreListProps{
    title: String
    items: Store[]
}

const StoreList:React.FC<StoreListProps> = ({title, items})=>{
        return (
            <div className="space-y-4 my-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {items.length === 0 && <div>No result</div>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.slice(0,5).map((item) => (
                <StoreCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        )
}

export default StoreList