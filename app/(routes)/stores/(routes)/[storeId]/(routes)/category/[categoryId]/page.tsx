import getCategory from "@/actions/(categories)/getCategory"
import Navbar from "@/components/navbar"
import RouteNav from "./components/routeNav"
import CategoryCard from "@/components/ui/category-card"
import ProductList from "@/components/product-List"
import getProducts from "@/actions/(products)/getAllProducts"
import getStoreProducts from "@/actions/(products)/getStoreProducts"
import SecondaryNav from "@/components/secondary-nav"
import getStoreCategories from "@/actions/(categories)/getStorecategories"


interface CategoryPageProps {
    params: {
        categoryId: string
        storeId: string
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
    const categoryId = params.categoryId
    const storeId = params.storeId
    const categories = await getStoreCategories(storeId)
    const category = await getCategory({ storeId, categoryId })
    const products = await getStoreProducts(storeId, {isFeatured:true, categoryId:categoryId})
    return (<div>
        <Navbar routeNav={<RouteNav category={category} />} />
        <div className="pt-16 px-4 md:px-6 lg:px-8">

       
        <SecondaryNav title="Store's Categories" categories={categories}/>
        <div  className="pl-48">
            <CategoryCard data={category} board/>
            <ProductList title="Products" items={products}/>
        </div>
        </div>
    </div>)
}

export default CategoryPage