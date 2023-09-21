import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async(productId:String):Promise<Product>=>{
     
    const res = await fetch(`${URL}/${productId}`,{ next: {revalidate:5000 }});
    
    return res.json()
}

export default getProduct