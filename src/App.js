import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Moviecard from "./Moviecard.js"
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
   
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();
      console.log("hello")
      setMovies(payload.data);
      setIsLoading(false);
    }
     setTimeout(() => {
    getData();
 }, 2000);
    
  }, []);
  return (
    <div>
      <nav>
         <a className="logo" href="index.html"><span className="mark">GLITCH</span>Movies</a>    
      </nav>
    
       {isLoading ? (
        <p>Wait for loading...</p>
      ) : (
            <div style={{background:"black"}}>{movies}</div>
        // movies.length > 0 ? (
        //   movies.map((item, index) => (
        //     <div key={index}>
        //       {JSON.stringify(item)} 
        //     </div>
        //   ))
        ) 
        // : (
        //   <p>No data available.</p>
        // )
      }
 
      <footer>
         <p className="copyright-text">&copy; 2023 Copyright All Rights Reserved Designed by <span className="mark">WebsCodeMedia</span></p>
        <p className="copyright-text">This product uses the TMDb API.</p>
      </footer>
    </div>
  );
}

export default App;
