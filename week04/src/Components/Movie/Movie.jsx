import React from "react";
import {useState} from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"; //베이직 path 경로를 선언해줌

function Movie({title, poster_path, vote_average, overview}) {
  const  [_style, setStyle] = useState({display : 'none'})

  return(
    <div 
    onMouseEnter = { e=> { 
      setStyle({display: 'block'})
    }}
    onMouseLeave = { e=> {
      setStyle({display:'none'})
    }}
    >
      <div className = 'movie-container'>
        <img src= {IMG_BASE_URL + poster_path} alt = "영화 포스터"/>
        <div className = 'movie-info'>
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
      </div>
      <div className = 'movie-overview' style = {_style}>
        <span>{title}</span>
        <p> </p>
        <div className = 'overview'>{overview}</div>
      </div>
    </div>
  )
}

export default Movie
