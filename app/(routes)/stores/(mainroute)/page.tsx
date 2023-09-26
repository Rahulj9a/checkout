import getAllCategories from "@/actions/(categories)/getAllCategories"
import getStores from "@/actions/(stores)/getAllStores"

import SecondaryNav from "@/components/secondary-nav"
import StoreList from "@/components/store-list"



const StoresPage = async () => {
    const stores = await getStores()
    const categories = await getAllCategories();
    return (
        <>

            <div>

                <SecondaryNav title="Categories" categories={categories} />

                <div className="flex flex-col lg:ml-48 gap-y-8 px-4 sm:px-6 lg:px-8">

                    <StoreList title="Featured Stores" items={stores} />
                </div>
            </div>
        </>
    )
}

export default StoresPage