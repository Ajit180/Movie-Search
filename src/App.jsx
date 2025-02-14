import React from 'react'
import './css/App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Favouriates from './pages/Favourites'
import Navbar from './components/Navbar'


function App () {
   
  return (
    <div>
      <Navbar/>
    <main className='main-content'>
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/favouriates' element={<Favouriates/>}/> 
       </Routes>
       </main>
    </div>
  )
} 

export default App
