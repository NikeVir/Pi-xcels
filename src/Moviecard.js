
import React from 'react';
function Moviecard({id,title,tagline,voteaverage,overview,viewMovie}) {
  const handleclick =()=>{
    console.log(id)
    viewMovie(id)
  }
  return (
     <div className="moviecard">
        
        <div className="moviecard_title">{title}</div>
<hr/>
        <div style={{padding:"5px",margin:"10px"}} className="moviecard_tag">{tagline}</div>
        <div style={{padding:"5px",margin:"10px"}} className="moviecard_va">{voteaverage}</div>
        <button style={{padding:"5px 10px",margin:"10px"}} onClick={handleclick}>view</button>
        <div className="moviecard_overview">{overview}</div>
        
    </div>
  );
}

export default Moviecard;