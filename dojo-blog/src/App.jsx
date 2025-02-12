import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import BlogList from './BlogList'
import ProductsList from './components/ProductsList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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

  function handleAuthor(author) {
    console.log(author)
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
