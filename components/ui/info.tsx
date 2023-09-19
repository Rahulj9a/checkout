import { Product } from "@/types"

interface infoProps {
    data: Product
}

const Info:React.FC<infoProps> = ({data}) => {
    return (
        <div>
           {data.name}
        </div>
    )
}

export default Info