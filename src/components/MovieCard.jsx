import React from 'react'
import '../css/MovieCard.css'
const MovieCard = ({movie}) => {
    function onFavouriteClick(){
        alert("clicked");
    }

  return (
    <div className='movie-card'>
       <div className='movie-poster'>
            <img src={movie.url} alt='movie.title'/>
            <div className='movie-overlay'>
               <button className='favouriate-btn' onClick={onFavouriteClick}>
                🔥
                </button> 
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
       </div>
    </div>
  )
}


export default MovieCard
