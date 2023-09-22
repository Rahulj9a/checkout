"use client"

import useCart from "@/hooks/useCart"

interface SummaryProps{

}

const Summary = ()=>{
    const items = useCart((state)=>state.items);
    const removeAll = useCart((state)=>state.removeAll)
    
    return(
        <div>

        </div>
    )
}

export default Summary