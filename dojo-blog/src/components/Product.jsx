import React from 'react'

const Product = (props) => {

    const { title, price, description } = props.product

    return (
        <div className="product-info-div">
            <h2>{title}</h2>
            <h3>{price}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Product