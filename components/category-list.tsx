import { Category } from "@/types"
 
import CategoryCard from "./ui/category-card"

interface CategoryListProps{
    title: String
    items: Category[]
}

const CategoryList:React.FC<CategoryListProps> = ({title, items})=>{
        return (
            <div className="space-y-4 my-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {items.length === 0 && <div>No result</div>}
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              {items.map((item) => (
                <CategoryCard key={item.id} data={item}/>
              ))}
            </div>
          </div>
        )
}

export default CategoryList