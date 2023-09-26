import getAllCategories from "@/actions/(categories)/getAllCategories"
import CategoryList from "@/components/category-list"
import MainNav from "@/components/mainnav"
import Navbar from "@/components/navbar"

const CategoriesPage = async () => {
    const categories = await getAllCategories()
    return <div>
        <Navbar routeNav={<MainNav/>}/>
        <div className="px-4 md:px-6 pt-16">


            <CategoryList title="Categories" items={categories} />
        </div>
    </div>
}

export default CategoriesPage