import getProduct from "@/actions/(products)/get-product"
import getProducts from "@/actions/(products)/getAllProducts"
import Gallery from "@/components/gallery"
import ProductList from "@/components/product-List"
import Container from "@/components/ui/container"
 
import Info from "@/components/ui/info"

interface ProductPageProps {
    params: {
        productId: String
    }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {

    const product = await getProduct(params.productId)
    const moreProducts = await getProducts({ categoryId: product.category.id, isFeatured: true })
    const suggestedProducts = moreProducts.filter(item=>item.id!==product.id)
    if (!product) {
        return null
    }
   
    return (
        <div className="bg-white">
            <Container>
                <div className=" px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                         <Gallery images={product.image}/>
                        <div className="mt-10 sm:mt-16 px-4 sm:px-0 lg:mt-0">
                            <Info data={product}/>
                        </div>
                    </div>
                </div>
            </Container>
            <div >
                 
                {suggestedProducts.length>0? <ProductList title="You may also like-" items={suggestedProducts}/>:''}
            </div>
        </div>
    )
}

export default ProductPage