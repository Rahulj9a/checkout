'use client'
import {useState, useEffect} from 'react'


const formatter = new Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR'
})


interface CurrencyProps{
    value?: string | number
}

const Currency:React.FC<CurrencyProps> =({value=0})=>{

    const [Mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    
      
    }, [])

    if(!Mounted){
        return null
    }
    
    return(
         <div className='font-semibold'>
            {formatter.format(Number(value))}
         </div>
    )
}

export default Currency