import MovieCard from "../components/MovieCard";
import { useState,useEffect } from 'react'
import {searchMovies,getPopularMovies} from "../Services/api"

function Home(){

    const [searchQuery ,SetSearchQuery]=useState('');
     
   const [movies,setMovies]=useState([]);//doubt:what is initial value here
   const [error,setError]=useState(null);
   const [loading,setLoading]=useState(true);


   useEffect(()=>{
       const loadPopularmovies = async()=>{
        try{
             const popularmovies = await getPopularMovies();
             setMovies(popularmovies);
        }
        catch(error){
            console.log(error);
            setError("Failed to Load movies...")
        }
        finally{
            setLoading(false);//doubt here
        }
       }
       loadPopularmovies();
   },[])

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