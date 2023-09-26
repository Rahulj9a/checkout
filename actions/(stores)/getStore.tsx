import { Store } from "@/types";
 

const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/`

 

const getStore = async(storeId:string):Promise<Store> =>{
    
     
    const url = `${URL}/${storeId}`
    const res = await fetch(url, { next: { revalidate: 11000 } })
    
    return res.json()
}

export default getStore