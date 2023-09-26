import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/all`


interface Query {
    categoryId?: string
    colorId?: string
    sizeId?: string
    storeId?:string
    isFeatured?: boolean
}

const getProducts = async (query: Query):Promise<Product[]> =>{
    
    const url = qs.stringifyUrl({
        url: URL,
        query:{
            storeId:query.storeId,
            colorId:query.colorId,
            sizeId:query.sizeId,
            categoryId:query.categoryId,
            isFeatured:query.isFeatured
        },
    })

    const res = await fetch(url, { next: { revalidate: 6000 }});
    return res.json()
}

export default getProducts