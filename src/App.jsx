// import React from 'react'
import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import Home from './Home';
import Contact from './Contact';
import About from './About';


function App() {
  const [page, setPage] = useState('home');

  const navigate = (pageName) => {
    setPage(pageName)
  }
  
  return (
    <>
      <NavBar navigate={navigate}/>
      
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}
    </>
  )
}

export default App
