import Navbar from "@/components/navbar"
import RouteNav from "./components/routeNav"
import getStore from "@/actions/(stores)/getStore"
import SecondaryNav from "@/components/secondary-nav"
import getStoreCategories from "@/actions/(categories)/getStorecategories"

import getStoreProducts from "@/actions/(products)/getStoreProducts"
import ProductList from "@/components/product-List"
import CategoryCard from "@/components/ui/category-card"
import CategoryList from "@/components/category-list"

interface StorePageProps {
    params: {
        storeId: string
    }
}



const StorePage: React.FC<StorePageProps> = async ({ params }) => {
    const store = await getStore(params.storeId)
    const categories = await getStoreCategories(params.storeId)
    const products = await getStoreProducts(params.storeId)

    /*   const productCountByCategory = (categoryId: string) => {
          const count = products.reduce((total, product) => total + Number(product.category.id == categoryId), 0)
  
          return count
      } */




    return (
        <>
            <Navbar routeNav={<RouteNav store={store} />} />
            <div className="pt-16">
                <SecondaryNav title="Store Categories" categories={categories} />
                <div className=" pl-48">
                    <div className="px-4">


                        <div>
                            <CategoryList title="Categories" items={categories} />
                       
                        </div>
                        <div>

                            <ProductList title="Products" items={products} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default StorePage