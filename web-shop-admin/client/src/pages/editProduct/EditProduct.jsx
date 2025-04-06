import React from 'react'
import styles from './EditProduct.module.css'

const EditProduct = () => {

    function handleSubmit(e) {
        e.preventDefault()

    }

    return (
        <div className={styles.container_div}>
            <form className={styles.product_form} onSubmit={handleSubmit}>
            <h1 className={styles.page_title_h1}>Edit product</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>
                <label htmlFor="price">Price</label>
                <input type="text" id="price"/>
                <label htmlFor="stock">Stock</label>
                <input type="text" id="stock"/>
                <label htmlFor="categoryId">Category id</label>
                <input type="text" id="categoryId"/>
                <label htmlFor="productDescription">Description</label>
                <textarea id="productDescription"></textarea>
                <button type='submit'>Save changes</button>
            </form>
        </div>
    )
}

export default EditProduct