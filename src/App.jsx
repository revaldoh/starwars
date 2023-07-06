import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home'
import Information from './component/Information';

function App() {


  return (
    <>
    <Navbar/>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/people/:id" component={Information} />
      </Switch>
    </Router>
    </>
  )
}

export default App
