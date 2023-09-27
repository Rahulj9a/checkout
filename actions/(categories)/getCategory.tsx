import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}`;

 

const getCategory = async ({storeId, categoryId}:{storeId:string, categoryId:string}): Promise<Category> => {
    const url = `${URL}/${storeId}/categories/${categoryId}`
  const res = await fetch(url, {next: { revalidate: 9000 } });

  return res.json();
};

export default  getCategory;