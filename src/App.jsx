import React from 'react'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

function App () {
  return (
    <>
     <Home/>
      <MovieCard movie={{title:"Tims-Films",release_date:"2024"}}/>
      {/* the second braces for the object  */}
      <MovieCard movie={{title:"Joes-Films",release_date:"2020"}}/>
    </>
  )
} 

export default App
