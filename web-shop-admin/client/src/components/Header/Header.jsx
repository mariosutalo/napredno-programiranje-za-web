import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles["header-nav"]}>
            <NavLink className={styles.menuLink}
                to="/products"
            >
                Products
            </NavLink>
            <NavLink
                to="/categories"
            >
                Categories
            </NavLink>
            <NavLink
                to="/users"
            >
                Users
            </NavLink>
            <NavLink
                to="/orders"
            >
                Orders
            </NavLink>
        </nav>
    )
}

export default Header