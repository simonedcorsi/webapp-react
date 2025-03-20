import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewCard from '../components/ReviewCard';

import ReviewForm from '../components/ReviewForm';

import GlobalContext from '../contexts/globalContext';

import StarRating from '../components/StarRating';

export default function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const { setIsLoading } = useContext(GlobalContext);

  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => setMovies(res.data))
      .catch((error) => console.log(error))
      .then(() => setIsLoading(false));
  };

  useEffect(fetchMovie, [id]);

  const renderReviews = () => {
    return movie.reviews?.map((review) => {
      return <ReviewCard key={review.id} review={review} />;
    });
  };

  return (
    <>
      <h1>{movie?.title}</h1>
      <img src={movie?.image} alt={movie?.title} />
      {/* qui andrà la pagina di dettaglio del prodotto */}

      <section>
        <h4>Our community reviews</h4>

        {movie?.reviews && (
          <h5>
            Media: <StarRating vote={movie.average_vote} /> {movie.average_vote} / 5
          </h5>
        )}

        {renderReviews()}
      </section>

      <section>
        {movie?.id && <ReviewForm movie_id={movie.id} reloadReviews={fetchMovie} />}
      </section>
    </>
  );
}