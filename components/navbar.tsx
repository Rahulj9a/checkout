import Link from "next/link"
import Container from "./ui/container"
import MainNav from "./mainnav"
import NavActions from "./nav_actions"

interface NavbarProps{
    routeNav?: React.ReactNode
}

const Navbar:React.FC<NavbarProps> = ({routeNav}) => {

    
    return (
        <nav>
            <div className="border-b">
                <Container>
                    <div className="fixed border-b-2 bg-white bg-opacity-80 w-full z-20 px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center ">
                        <Link href={'/'} className="font-bold ml-4 lg:ml-0 flex gap-x-2 ">
                            CHECKOUT
                        </Link>
                        <div className="flex justify-center ">
                            {routeNav}
                        </div>

                        <NavActions />
                    </div>
                </Container>
            </div>
        </nav>
    )
}

export default Navbar