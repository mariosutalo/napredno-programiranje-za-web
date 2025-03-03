import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import BlogList from './BlogList'
import ProductsList from './components/ProductsList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Create from './components/Create'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
