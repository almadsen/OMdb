import { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';
import fallback from '../../assets/fallback.png';
import './Movies.css';

const api = 'https://www.omdbapi.com/?';
const apiKey = `apikey=${import.meta.env.VITE_APP_API_KEY}`;

export default function Movies({ movies }) {
  const [selectedId, setSelectedId] = useState(null);
  const [movieDetails, setMovieDetails] = useState({});
  const [show, setShow] = useState(false);

  const hideModal = () => {
    setShow(false);
    setMovieDetails();
  };

  const handleClose = () => {
    hideModal();
  };

  const getDetails = async (id) => {
    try {
      await axios.get(api + apiKey + `&i=${id}`).then((res) => {
        if (res) {
          setMovieDetails(res.data);
          setShow(true);
        }
      });
      setSelectedId(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="movies">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <img src={movie.Poster !== 'N/A' ? movie.Poster : fallback} alt="" />
          <div className="movie-title">
            <p>{movie.Title}</p>
          </div>
          <button
            className="movie-detailsBtn"
            onClick={() => getDetails(movie.imdbID)}
          >
            Read more
          </button>
          {movieDetails && selectedId === movie.imdbID && show ? (
            <Modal movieInfo={movieDetails} handleClose={handleClose} />
          ) : (
            <div className="modal display-none"></div>
          )}
        </div>
      ))}
    </div>
  );
}
