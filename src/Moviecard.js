
import React from 'react';
function Moviecard({image,title,tagline,voteaverage,overview}) {

  return (
     <div className="moviecard">
        
        <div className="moviecard_title">{title}</div>
        <div className="moviecard_tag">{tagline}</div>
        <div className="moviecard_va">{voteaverage}</div>
        <div className="moviecard_overview">{overview}</div>
    </div>
  );
}

export default Moviecard;