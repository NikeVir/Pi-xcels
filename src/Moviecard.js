
import React from 'react';
function Moviecard({id,title,tagline,voteaverage,overview,viewMovie}) {

  return (
     <div className="moviecard">
        
        <div className="moviecard_title">{title}</div>
<hr/>
        <div style={{padding:"5px",margin:"10px"}} className="moviecard_tag">{tagline}</div>
        <div style={{padding:"5px",margin:"10px"}} className="moviecard_va">{voteaverage}</div>
        <button style={{padding:"5px 10px",margin:"10px"}} onclick={viewMovie}>view</button>
        <div className="moviecard_overview">{overview}</div>
        <button onclick={viewMovie(id)}></button>
    </div>
  );
}

export default Moviecard;