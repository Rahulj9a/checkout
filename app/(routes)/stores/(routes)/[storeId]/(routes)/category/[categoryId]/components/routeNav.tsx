import { Category } from "@/types";
import Link from "next/link";
import { VscChevronRight } from "react-icons/vsc";

interface RouteNavProps {
  category: Category;
}

const RouteNav: React.FC<RouteNavProps> = async ({ category }) => {
  const routes = [
    {
      label1: category.store.name,
      label2: category.name,

      href1: `/stores/${category.store.id}`,
      href2: `/stores/${category.store.id}/category/${category.id}`,
      active: true,
    },
  ];

  return (
    <div className="flex gap-x-4 mx-4 items-center">
      {routes.map((route) => {
        return (
          <div key={route.label2} className="flex items-center text-center">
            <Link href={route.href1} className="text-2xl font-semibold">{route.label1}</Link>
            <VscChevronRight size="30px" />
            <Link className="text-xl" href={route.href2}>{route.label2}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default RouteNav;
