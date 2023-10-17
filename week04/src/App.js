//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieStyle from './Components/Movie/Movie.style';
import { movies } from './movieDummy';

function App() {
  return (
    <div className="app-container">
      {movies.results.map((item) => {           //값을 여러개 가지고 있는 배열에서 모든 값을 꺼내고자 할 때 사용하는 map() 함수
        return (
          <MovieStyle
          title = {item.title}
          poster_path = {item.poster_path}
          vote_average = {item.vote_average}
          overview = {item.overview}
          />
        ) 
      })}
    </div>
  );
}

export default App;
