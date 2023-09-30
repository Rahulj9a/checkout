import getCategory from "@/actions/(categories)/getCategory";
import Navbar from "@/components/navbar";
import RouteNav from "./components/routeNav";
import CategoryCard from "@/components/ui/category-card";
import ProductList from "@/components/product-List";

import getStoreProducts from "@/actions/(products)/getStoreProducts";
import SecondaryNav from "@/components/secondary-nav";
import getStoreCategories from "@/actions/(categories)/getStorecategories";
import getSizes from "@/actions/getSizes";
import getColors from "@/actions/getColors";
import MobileFilter from "./components/MobileFilters";
import Filter from "./components/Filter";

interface CategoryPageProps {
    params: {
        categoryId: string;
        storeId: string;
    };
    searchParams: {
        colorId?: string;
        sizeId?: string;
    };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams,
}) => {
    const categoryId = params.categoryId;
    const storeId = params.storeId;
    const categories = await getStoreCategories(storeId);
    const category = await getCategory({ storeId, categoryId });
    const sizes = await getSizes(storeId)
    const colors = await getColors(storeId)
    const products = await getStoreProducts(storeId, {
        isFeatured: true,
        categoryId: categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });

    return (
        <div>
            <Navbar routeNav={<RouteNav category={category} />} />

            <div className="pt-16 px-4 md:px-6 lg:px-8">
                <SecondaryNav title="Store's Categories" categories={categories} />
                <div className="pl-48">

                    <CategoryCard data={category} board />
                    <div className="lg:flex w-full lg:gap-x-8">
                        <MobileFilter colors={colors} sizes={sizes} />

                        <div className="hidden w-full lg:flex gap-x-2 lg:justify-around">
                            <Filter valueKey="sizeId" data={sizes} name="Sizes" />
                            <Filter valueKey="colorId" data={colors} name="Colors" />
                        </div>
                    </div>
                    <div className="mt-6 lg:col-span-4 lg:mt-0">
                        {products.length === 0 && <div>No result</div>}
                        <ProductList title="Products" items={products} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
