import useFetch from "../hooks/useFetch"
import Product from "./Product"

const ProductsList = () => {
    const { data: products, isPending, error } = useFetch('https://fakestoreapi.com/products', false)

    return (
        <div className="home ">
            {error && <div>error occured!</div>}
            {isPending && <div>Loading...</div>}
            <div className="products-grid-div">
                {products && products.map((product) => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductsList