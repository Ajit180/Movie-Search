import MovieCard from "../components/MovieCard";
import { useState } from 'react'

function Home(){

    const [searchQuery ,SetSearchQuery]=useState('');
     
    const movies = [
        {id:1,title:"John Wick",release_date:2020},
        {id:2,title:"Terminator",release_date:1998},
        {id:3,title:"The Matrix",release_date:1999}
    ];

    const handleSearch =(e)=>{
       e.preventDefault();
       SetSearchQuery('');

    }

   return(
       <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies" 
            className=""
            value={searchQuery}
            onChange={(e)=>SetSearchQuery(e.target.value)}
            />

             <button type="submit" className="search-button">Submit</button>

        </form>
        <div className="movies-grid">
           {movies.map((movie)=>movie.title.toLowerCase().startsWith(searchQuery)&&
            (<MovieCard movie={movie} key={movie.id} />)
           )}
        </div>
       </div>
   );
}

export default Home;