import React, { useState, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductsList from '../../components/productsList/productsList'
import styles from './Products.module.css'

const Products = () => {

  const [productName, setProductName] = useState('')
  const inputRef = useRef()
  const { data, error, isPending } = useFetch(`http://localhost:3000/products/?product_name=${productName}`)

  function handleSearch() {
    const productName = inputRef.current.value
    console.log('Search product name is:', productName)
    setProductName(productName)
  }

  return (
    <div>
      <div className={styles.search_div}>
        <input className={styles.search_products_input} type="text" ref={inputRef} />
        <button className={styles.search_btn} onClick={handleSearch}>
          <img className={styles.search_img} src='/icons/search-icon.png' alt="" />
        </button>
      </div>
      {isPending && <p>Loading...</p>}
      {error && <p>error</p>}
      {data?.length > 0 && <ProductsList products={data} />}
    </div>
  )
}

export default Products