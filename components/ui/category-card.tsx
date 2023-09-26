import {  Category } from "@/types";

interface CategoryCardProps {
    data:Category;
    productCount?: number | string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    data,
 
    productCount,
}) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 overflow-hidden rounded-xl">
            <div
                style={{ backgroundImage: `url(${data.billboard.imageUrl})` }}
                className="rounded-xl aspect-square relative md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
                <div className="absolute left-3 top-3">
                    <div className="px-1 py-1 bg-gray-500 bg-opacity-50 rounded-lg">
                        <p className="text-lg font-semibold">{data.billboard.label}</p>
                    </div>

                </div>

                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="px-2 py-2 bg-gray-500 bg-opacity-50 rounded-lg">
                        <p className="font-semibold text-2xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs">
                            {data.name}
                        </p>
                    </div>
                </div>
               {/*  <div className="absolute right-5  bottom-5">
                    <div className="px-2 py-2 bg-gray-500 bg-opacity-50 rounded-lg">
                        <p className="text-xl font-semibold">
                            {productCount} <span className="mx-2">Products</span>
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CategoryCard;
