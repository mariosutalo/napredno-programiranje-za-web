import React, { useState } from 'react'
import ProductForm from '../../components/productForm/ProductForm'

const AddNewProduct = () => {
    const [formData, setFormData] = useState({})
    
    return (
        <div>
            <ProductForm formData={formData} setFormData={setFormData}/>
        </div>
    )
}

export default AddNewProduct