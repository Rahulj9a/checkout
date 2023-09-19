import getProduct from "@/actions/(products)/get-product"
import getProducts from "@/actions/(products)/getAllProducts"
import Container from "@/components/ui/container"
 
import Info from "@/components/ui/info"

interface ProductPageProps {
    params: {
        productId: String
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {

    const product = await getProduct(params.productId)
    const suggestedProducts = await getProducts({ categoryId: product.category.id, isFeatured: true })

    if (!product) {
        return null
    }
    return (
        <div>
            <Container>
                <div className="border-2 px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-2 lg:items-start lg:gap-x-8">
                         
                        <div>
                            <Info data={product}/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage