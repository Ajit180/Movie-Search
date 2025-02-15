import MovieCard from "../components/MovieCard";
import { useState,useEffect } from 'react'
import {searchMovies,getPopularMovies} from "../Services/api.js"

function Home(){

    const [searchQuery ,SetSearchQuery]=useState('');
     
   const [movies,setMovies]=useState([]);//doubt:what is initial value here
   const [error,setError]=useState(null);
   const [loading,setLoading]=useState(true);
  //Doubt: how the loading is getting true or false in this page explain me that

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

    const handleSearch  = async(e)=>{
       e.preventDefault();
       if(!searchQuery.trim()) return;// here doubt that what is (!) falsy value here what can be that 
       if(loading) return;
       setLoading(true);
       
       try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
        setError(null);
       } catch (error) {
         console.log(error);
         setError("Failed to search movies...")
       }
       finally{
          setLoading(false);
       }

       SetSearchQuery("");


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
        {error && <div className="error-message"> {error}</div>}
         {loading?(
            <div className="loading">Loading...</div>
         ):(
            <div className="movies-grid">
            {movies.map((movie)=>movie.title.toLowerCase().startsWith(searchQuery)&&
             (<MovieCard movie={movie} key={movie.id} />)
            )}
         </div>
         )}
        
       </div>
   );
}

export default Home;