import MovieCard from '../components/MovieCard';
// import ReviewCard from "../components/ReviewCard";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  //funzione fetch per i film
  const fetchMovies = () => {
    console.log('Fetching movies...');

    axios
      .get('http://localhost:3000/movies')
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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