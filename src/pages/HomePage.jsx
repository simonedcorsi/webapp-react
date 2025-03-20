import MovieCard from '../components/MovieCard';

import axios from 'axios';
import { useState, useEffect, useContext} from 'react';
import GlobalContext from '../contexts/globalContext';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const { setIsLoading } = useContext(GlobalContext)

  //funzione fetch per i film
  const fetchMovies = () => {
    console.log('Fetching movies...');

    setIsLoading(true)

    axios
      .get('http://localhost:3000/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then( () => setIsLoading(false) );
  };

  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div className="col" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      );
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <h1 className="text-primary">FILM</h1>
      <h2>Qui andranno tutti i film</h2>
      <div className="row row-cols-3">
        {/* <MovieCard/> */}
        {renderMovies()}

        {/* {movies.map((movie) => {
          return (
            <div className="col" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          );
        })} */}
      </div>
    </>
  );
}