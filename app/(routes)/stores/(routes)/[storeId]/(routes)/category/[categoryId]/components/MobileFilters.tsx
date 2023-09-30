"use client";
import { useState } from "react";
import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import { Dialog } from "@headlessui/react";
 
import IconButton from "@/components/ui/icon_button";
import { AiOutlineClose } from "react-icons/ai";
import Filter from "./Filter";

interface MobileFilterProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
    const [open, setopen] = useState(false);
    const onOpen = () => setopen(true);
    const onClose = () => setopen(false);
    return (
        <>
            <Button onClick={onOpen} className="lg:hidden flex items-center gap-x-2">
                Filters <BiPlus size={20} />
            </Button>
            <Dialog
                open={open}
                as="div"
                className="relative z-40 lg:hidden"
                onClose={onClose}
            >
                <div className="fixed inset-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                        {/* Close button */}
                        <div className="items-center flex justify-end px-4">
                                <IconButton icon={<AiOutlineClose size={10} />} onClick={onClose}/> 
                        </div>
                        <div className="p-4">
                             <Filter valueKey="sizeId" name="Sizes" data={sizes}/>
                             <Filter valueKey="colorId" name="Colors" data={colors}/>
                        </div>

                    </Dialog.Panel>
                </div>
            </Dialog>

        </>
    );
};

export default MobileFilter;
