import getProducts from "@/actions/(products)/getAllProducts";
import getStores from "@/actions/(stores)/getAllStores";
import ProductList from "@/components/product-List";
import StoreList from "@/components/store-list";
import Container from "@/components/ui/container";
import React from "react";

const Homepage = async() => {


  const products = await getProducts({ isFeatured: true })
  const stores = await getStores()
console.log(stores)
  return (
    <Container>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
        <StoreList title="Featured Stores" items={stores} />
      </div>
    </Container>
  );
};

export default Homepage;
