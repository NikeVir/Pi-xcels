import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/movies");
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);
  return (
    <div>
      <nav>
         <a className="logo" href="index.html"><span className="mark">GLITCH</span>Movies</a>    
      </nav>
      
      <ul className="movie_list_ul" id="movieUl"></ul>

      <footer>
         <p className="copyright-text">&copy; 2023 Copyright All Rights Reserved Designed by <span className="mark">WebsCodeMedia</span></p>
        <p className="copyright-text">This product uses the TMDb API.</p>
      </footer>
    </div>
  );
}

export default App;
        // <img src={logo} className="App-logo" alt="logo" />
        // <p>
        //   Edit <code>src/App.js</code> and your changes will live-update
        //   automatically.
        // </p>
        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a>