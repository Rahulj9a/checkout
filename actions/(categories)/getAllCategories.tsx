import { Category } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/all`

const getAllCategories = async():Promise<Category[]>=>{
    const res = await fetch(URL, { next: { revalidate: 8000 } })
    
    return res.json()
}

export default getAllCategories