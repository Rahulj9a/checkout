import { Store } from "@/types";
 

const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores/all`

 

const getStores = async():Promise<Store[]> =>{
    
     

    const res = await fetch(URL, { next: { revalidate: 7000 } })
    
    return res.json()
}

export default getStores