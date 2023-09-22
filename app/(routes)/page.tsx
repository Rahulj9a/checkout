import getAllCategories from "@/actions/(categories)/getAllCategories";
import getProducts from "@/actions/(products)/getAllProducts";
import getStores from "@/actions/(stores)/getAllStores";
import MainNav from "@/components/mainnav";
import Navbar from "@/components/navbar";
import ProductList from "@/components/product-List";
import SecondaryNav from "@/components/secondary-nav";
import StoreList from "@/components/store-list";
 
import React from "react";

const Homepage = async () => {
  const products = await getProducts({ isFeatured: true });
  const stores = await getStores();
  const categories = await getAllCategories();


  return (
    <>
    <Navbar routeNav={<MainNav/>}/>
      <div className="pt-16">

        <SecondaryNav title="Categories" categories={categories} />

        <div className="flex flex-col  lg:ml-48 gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
          <StoreList title="New Featured Stores" items={stores} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
