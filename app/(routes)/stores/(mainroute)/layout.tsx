import MainNav from "@/components/mainnav";
import Navbar from "@/components/navbar";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>
        <Navbar routeNav={<MainNav/>} />
        <div className="pt-16">
            {children}
        </div></>;
}