import Navbar from "@/components/navbar";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>
        <Navbar />
        <div className="pt-16">
            {children}
        </div></>;
}