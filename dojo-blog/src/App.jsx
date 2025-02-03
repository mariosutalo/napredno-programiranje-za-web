import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import BlogList from './BlogList'
import ProductsList from './components/ProductsList'

function App() {

  const [blogs, setblogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setblogs(newBlogs)
  }

  function handleAuthor (author) {
    console.log(author)
  }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Home /> */}
        <ProductsList/>
      </div>
    </div>
  )
}

export default App
