import useFetch from "../hooks/useFetch"

const ProductsList = () => {

    const { data: products, isPending, error } = useFetch('https://fakestoreapi.com/products')

    return (
        <div className="home">
            {error && <div>error occured!</div>}
            {isPending && <div>Loading...</div>}
            {products && <p>show products, to do..</p>}
        </div>
    )
}

export default ProductsList