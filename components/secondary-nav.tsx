'use client'

import Link from "next/link"
 
import { Category } from "@/types"
import { useRouter } from "next/navigation"


interface SecondaryNavProps {
    title: string
    categories?: Category[]
}
const SecondaryNav: React.FC<SecondaryNavProps> = ({ title, categories }) => {
    const router = useRouter()
     
const handleClick =(category:Category) =>{
router.push(`/stores/${category.storeId}/category/${category.id}`)
}
    return (
        <nav className="relative lg:block hidden" >


            <div className="fixed border-r-2 m-auto left-0 py-4 h-screen flex flex-col gap-3 justify-start w-48 items-center ">
                <Link href={'/'} className="font-bold text-xl  flex gap-x-2 ">
                    {title}
                </Link>
                <div className="flex flex-col justify-center gap-2 border-l-[1px] pl-2">
                    {categories ? categories.map((category ) => { return (<div className="cursor-pointer" onClick={()=>handleClick(category)} key={category.id}>{category.name}</div>) }) : ''}
                </div>


            </div>


        </nav>
    )
}

export default SecondaryNav