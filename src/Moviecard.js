import React, { useState, useEffect } from "react";

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
        
        
    </div>
  );
}

export default App;