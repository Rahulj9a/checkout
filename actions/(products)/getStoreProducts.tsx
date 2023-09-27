import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  storeId?: string
  isFeatured?: boolean
}

const getStoreProducts = async (storeId: string, query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `${URL}/${storeId}/products`,
    query: {

      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    },
  })
  const res = await fetch(url, { next: { revalidate: 7000 } });

  return res.json();
};

export default getStoreProducts