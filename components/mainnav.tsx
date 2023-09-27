"use client"
import {useEffect, useState} from 'react'
import Link from 'next/link'
import { usePathname} from 'next/navigation'

const MainNav = () => {
    const [isMounted, setIsMounted] = useState(false)
    const pathname = usePathname()
    useEffect(()=>{setIsMounted(true)},[])
    if(!isMounted){
        return null
    }

    
    
     

    const routes = [
        {
            label:"Explore",
            href:'/',
            active: pathname === "/"
        },
        {
            label:"Stores",
            href:'/stores',
            active: pathname === `/stores`
        },
        
        
    ]

    return (
        <div className='flex gap-x-4 mx-4 items-center'>
            {routes.map((route)=>{
                return <Link key={route.href} href={route.href} className={`${route.active?"font-bold":"font-light"}`}>{route.label}</Link>
            })}
        </div>
    )
}

export default MainNav