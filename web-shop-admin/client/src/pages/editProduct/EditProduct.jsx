import React, { useEffect, useState } from 'react'
import styles from './EditProduct.module.css'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const EditProduct = () => {

    const params = useParams()
    const { data, isPending, error } = useFetch(`http://localhost:3000/products/productDetails?id=${params.id}`)
    const [formData, setFormData] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()
        console.log('handle submit pressed')
    }

    useEffect(() => {
        setFormData(data)
    }, [data])

    function updateFormValue(e) {
        console.log('form change called')
        const { name, value } = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    return (
        <div className={styles.container_div}>
            {isPending && <p>Loading product...</p>}
            {error && <p>Error loading product</p>}
            {data && <form className={styles.product_form} onSubmit={handleSubmit}>
                <h1 className={styles.page_title_h1}>Edit product</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name='name' value={formData?.name ?? ''} onChange={updateFormValue} />
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name='price' value={formData?.price ?? 0} onChange={updateFormValue} />
                <label htmlFor="stock">Stock</label>
                <input type="number" id="stock" name='stock' value={formData?.stock ?? 0} onChange={updateFormValue} />
                <label htmlFor="categoryId">Category id</label>
                <input type="text" id="categoryId" name='category_id' value={formData?.category_id ?? 0} onChange={updateFormValue} />
                <label htmlFor="productDescription">Description</label>
                <textarea id="productDescription" name='description' value={formData?.description} onChange={updateFormValue}></textarea>
                <button type='submit'>Save changes</button>
            </form>}
        </div>
    )
}

export default EditProduct