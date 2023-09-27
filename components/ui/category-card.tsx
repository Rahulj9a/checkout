"use client"

import { Category } from "@/types";
import { useRouter } from "next/navigation";

interface CategoryCardProps {
    data: Category;
    productCount?: number | string;
    board?: boolean
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    data,
    board,
    productCount,
}) => {
    console.log(data)
    const router = useRouter()
    const handleClick = ()=>{
        router.push(`/stores/${data.storeId}/category/${data.id}`)
    }
    return (
        <div className="p-4 sm:p-6 lg:p-8 overflow-hidden rounded-xl cursor-pointer" onClick={handleClick}>
            <div
                style={{ backgroundImage: `url(${data.billboard.imageUrl})` }}
                className="rounded-xl aspect-square relative md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
                <div className="absolute left-3 top-3">
                    <div className="px-1 py-1 bg-gray-500 bg-opacity-50 rounded-lg">
                        <p className="text-base font-semibold">{data.billboard.label}</p>
                    </div>

                </div>

                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="px-2 py-2 bg-gray-500 bg-opacity-50 rounded-lg">
                        <p className={` ${board ? "text-xl sm:text-2xl  md:text-3xl lg:text-5xl font-bold" : "font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl"}  sm:max-w-xl max-w-xs`}>
                            {data.name}
                        </p>
                    </div>
                </div>
                 {productCount && <div className="absolute right-5  bottom-5">
                    <div className="px-2 py-2 bg-gray-500 bg-opacity-50 rounded-lg">
                        <p className="text-xl font-semibold">
                            {productCount} <span className="mx-2">Products</span>
                        </p>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default CategoryCard;
