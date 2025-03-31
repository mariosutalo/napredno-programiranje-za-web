import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductsList from '../../components/productsList/productsList'
import styles from './Products.module.css'

const Products = () => {

  const [productName, setProductName] = useState('')
  const { data, error, isPending } = useFetch(`http://localhost:3000/products/?product_name=${productName}`)

  function onChangeName(e) {
    console.log('Search product name is:', e.target.value)
    setProductName(e.target.value)
  }

  return (
    <div>
      <div className={styles.search_div}>
        <input className={styles.search_products_input} type="text" value={productName} onChange={onChangeName} />
        <button className={styles.search_btn}>
          <img className={styles.search_img} src='/icons/search-icon.png' alt="" />
        </button>
      </div>
      {isPending && <p>Loading...</p>}
      {error && <p>error</p>}
      {data && <ProductsList products={data} />}
    </div>
  )
}

export default Products