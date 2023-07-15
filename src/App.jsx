import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Home from './component/Home'
import Information from './component/Information';

function App() {


  return (
    <>
    
     <Router>
     <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/information/:id/" element={<Information/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
