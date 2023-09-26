import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}`;


const getStoreCategories = async (storeId:string): Promise<Category[]> => {
    const url = `${URL}/${storeId}/categories`
  const res = await fetch(url, {next: { revalidate: 9000 } });

  return res.json();
};

export default getStoreCategories;