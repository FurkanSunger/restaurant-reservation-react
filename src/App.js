import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import TopMenu from './components/Top Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import MenuPage from './Pages/Menu'

const App = () => {
  return (
    <>
      <Router>
        <TopMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={MenuPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
