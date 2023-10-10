//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movie from './Components/Movie';
import { movies } from './movieDummy';

function App() {
  return (
    <div>
      <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie
              title = {item.title}
              poster_path = {item.poster_path}
              vote_average = {item.vote_average}
              /> 
            )
          })
        }
      </div>
    </div>
    
  );
}

export default App;
