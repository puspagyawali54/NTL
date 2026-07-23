

import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import ScrollToTop from './component/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './component/Footer';
import { useState } from 'react';





function App() {
  const[search,setSearch]=useState("")
  return (



   <>
   
   <div className='bg-cover bg-center bg-fixed min-h-screen md:w-full' style={{
    backgroundImage:"url(/diamond.webp)"
   }}>

   
   <Navbar search={search} setSearch={setSearch} />
   <ScrollToTop/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/hero' element={<Hero/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/products' element={<Products search={search}/>}/>
  
   </Routes>  
    <Footer />
  
</div>
   
   
   </>
   
  )
}

export default App