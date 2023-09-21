"use client"

import { Product } from "@/types"
import Gallery from "@/components/gallery"
import Info from "@/components/ui/info"
 
import usePreviewModal from "@/hooks/usePreviewModal"
import Modal from "./ui/modal"

interface PreviewModalProps {
    data?: Product
}



const PreviewModal: React.FC<PreviewModalProps> = ({ data }) => {
    const previewModal = usePreviewModal()
    const product = usePreviewModal((state) => state.data);

    if (!product) {
        return null
    }
    return (
        
            <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
                <div className=" px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product.image} />
                        <div className="mt-10 sm:mt-16 px-4 sm:px-0 lg:mt-0">
                            <Info data={product} />
                        </div>
                    </div>
                </div>
            </Modal>
         
    )
}
export default PreviewModal