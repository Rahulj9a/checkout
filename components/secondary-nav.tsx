import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./mainnav"
import NavActions from "./nav_actions"
import { Category } from "@/types"


interface SecondaryNavProps {
    title: string
    categories?: Category[]
}
const SecondaryNav: React.FC<SecondaryNavProps> = ({ title, categories }) => {


    return (
        <nav className="fixed">


            <div className="fixed border-r-2 m-auto left-0 py-4 h-screen flex flex-col gap-3 justify-start w-48 items-center ">
                <Link href={'/'} className="font-bold text-xl  flex gap-x-2 ">
                    {title}
                </Link>
                <div className="flex flex-col justify-center gap-2 border-l-[1px] pl-2">
                    {categories ? categories.map((item, index) => { return (<div key={item.id}>{item.name}</div>) }) : ''}
                </div>


            </div>


        </nav>
    )
}

export default SecondaryNav