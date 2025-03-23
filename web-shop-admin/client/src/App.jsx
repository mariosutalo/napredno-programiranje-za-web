import './assets/styles/global.css'
import Layout from './components/Layout/Layout';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './Pages/Products/Products';
import Categories from './Pages/Categories/Categories';
import User from './Pages/Users/Users';
import Order from './Pages/Orders/Orders';

function App() {

  return (
    <Router>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Product/>}/>
          <Route path="products" element={<Product/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="users" element={<User/>}/>
          <Route path="orders" element={<Order/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
