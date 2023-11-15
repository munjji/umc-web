import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/pages/Home';
import Movies from './Components/pages/Movies';
import Tvs from './Components/pages/Tvs';
import TvDetail from './Components/pages/TvDetail';
import Celebrity from './Components/pages/Celebrity';
import NotFound from './Components/pages/NotFound';
import MovieDetail from './Components/pages/MovieDetail';
import Login from './Components/pages/LoginPage';

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/Movie/:title" element={<MovieDetail />} />
          <Route path="/Tv" element={<Tvs />} />
          <Route path="/Tv/:name" element={<TvDetail />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/LoginPage" element={<Login />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
