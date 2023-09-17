"use client"
import {useEffect, useState} from 'react'
import Link from 'next/link'
import {useParams, usePathname} from 'next/navigation'

const MainNav = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=>{setIsMounted(true)},[])
    if(!isMounted){
        return null
    }

    
    const pathname = usePathname()
    const params = useParams

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
                return <Link href={route.href} className={`${route.active?"font-bold":"font-light"}`}>{route.label}</Link>
            })}
        </div>
    )
}

export default MainNav