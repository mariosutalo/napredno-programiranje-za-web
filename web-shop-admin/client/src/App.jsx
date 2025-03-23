import './assets/styles/global.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path={"/products"} element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
