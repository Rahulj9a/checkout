import { Product } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}`;


const getStoreProducts = async (storeId:string): Promise<Product[]> => {
    const url = `${URL}/${storeId}/products`
  const res = await fetch(url,{next: { revalidate: 7000 } });

  return res.json();
};

export default getStoreProducts;