import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
// import Header from './components/common/Header'
import Home from './components/Home'
import Footer from './components/common/Footer'
import Layout from './components/common/Layout'
import Blog from './components/Blog'
// import Contact from './components/Contact'

const App = () => {
  return (
    <> 
      {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='/blog' element={<Blog />}/>            
            {/* <Route path='/contato' element={<Contact />}/> */}
          </Route>
        </Routes>
      <Footer />
      
    </>       
  )
}

export default App