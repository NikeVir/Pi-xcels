import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Moviecard from "./Moviecard.js"
function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [show,setShow] = useState(false)
  useEffect(() => {
   
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();
      setMovies(payload);
      setIsLoading(false);
    }
     setTimeout(() => {
    getData();
 }, 2000);
    
  }, []);
  
  const viewMovie=async(id)=>{
    const response = await fetch(`/api/movies/${id}`);
    const payload = await response.json();
    setMovie(payload)
    setShow(true)
  }
  return (
    <div>
      <nav>
         <a className="logo" href="index.html"><span className="mark">GLIITCH</span>Movies</a>    
      </nav>
    {
      show?(
        <div>
          <div>
              <div>{movie.original_title}</div>
              <div>{movie.id}</div>
              <div>{movie.overview}</div>
              <div>{movie.release_date}</div>
              <div>{movie.runtime}</div>
              <div>{movie.status}</div>
              <div>{movie.tagline}</div>
              <div>{movie.title}</div>
              <div>{movie.vote_average}</div>
              <div>{movie.vote_count}</div>
    
          </div>
        </div>
      ):("")
    }
    <div className="movie_list_ul">
        
       {isLoading ? (
        <p>Wait for loading...</p>
      ) : (
            // <div style={{background:"black",height:"100px",width:"100px"}}>{movies}</div>
        movies.length > 0 ? (
          movies.map((item, index) => (
            <div key={index}>
                     <Moviecard 
                     image={item.image} 
                      title={item.title}
                      tagline={item.tagline}
                      voteaverage={item.vote_average}
                      overview={item.overview}

                      />
  
            </div>
          ))
        ) 
        : (
          <p>No data available.</p>
        )
      )}
 </div>
      <footer>
         <p className="copyright-text">&copy; 2023 Copyright All Rights Reserved Designed by <span className="mark">WebsCodeMedia</span></p>
        <p className="copyright-text">This product uses the TMDb API.</p>
      </footer>
    </div>
  );
}

export default App;
