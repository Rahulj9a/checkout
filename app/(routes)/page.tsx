import getAllCategories from "@/actions/(categories)/getAllCategories";
import getProducts from "@/actions/(products)/getAllProducts";
import getStores from "@/actions/(stores)/getAllStores";
import ProductList from "@/components/product-List";
import SecondaryNav from "@/components/secondary-nav";
import StoreList from "@/components/store-list";
import Container from "@/components/ui/container";
import React from "react";

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true });
  const stores = await getStores();
  const categories = await getAllCategories();

 
  return (
    <div >

      <SecondaryNav title="Categories" categories={categories} />

      <div className="flex flex-col ml-48 gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
        <StoreList title="New Featured Stores" items={stores} />
      </div>
    </div>
  );
};

export default Homepage;
