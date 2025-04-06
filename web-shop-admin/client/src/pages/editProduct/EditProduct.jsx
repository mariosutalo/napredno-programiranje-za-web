import React from 'react'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
    const params = useParams()
    return (
        <div>EditProduct with id: {params.productId}</div>
    )
}

export default EditProduct