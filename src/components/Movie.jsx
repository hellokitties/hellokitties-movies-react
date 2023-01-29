import React from 'react';

function Movie(props) {

  const {Title, Year, imdbID, Poster}  = props
    return <div className="movie card" key={imdbID}>
 
        <div className="card-image">
          <img src={Poster} />
        
        </div>
        <div className="card-content">
        <p className="card-title">{Title}</p>
          <p>{Year}</p>
        </div>
      
     
   

    </div>
    
    
    ;
}

export { Movie };