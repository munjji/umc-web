
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average}) {
  return (
    <div class = 'movie-container'>
      <img src= {IMG_BASE_URL + poster_path} alt = "영화 포스터"/>
      <div class = 'movie-info'>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  )
}

export default Movie