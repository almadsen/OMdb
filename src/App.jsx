import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import Pagination from './components/Pagination/Pagination';
import backgroundImage from './assets/bg.jpg';
import './App.css';

const api = 'https://www.omdbapi.com/?';
const apiKey = `apikey=${import.meta.env.VITE_APP_API_KEY}`;

export default function App() {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState(null);

  const [totalResults, setTotalResults] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const getNumberOfPages = () => {
    const totalNumberOfpages = Math.ceil(totalResults / 10);
    setNumberOfPages(totalNumberOfpages);
  };

  const getInfo = async (pageNumber) => {
    try {
      await axios
        .get(
          api +
            apiKey +
            `&s=${name}&type=movie&page=${pageNumber ? pageNumber : 1}`
        )
        .then((res) => {
          if (res) {
            setMovies(res.data.Search);
            setTotalResults(res.data.totalResults);
            setCurrentPage(pageNumber ? pageNumber : 1);
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () => {
    getInfo();
  };

  useEffect(() => {
    getNumberOfPages();
  });

  const pages = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <p key={i} onClick={() => handlePagination(i)}>
        {i}
      </p>
    );
  }

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    getInfo(pageNumber);
    window.scrollTo(0, 0);
  };

  const bgImg = movies ? null : { backgroundImage: `url(${backgroundImage})` };

  return (
    <div className="App" style={bgImg}>
      <Header setName={setName} handleSubmit={handleSubmit} />

      {movies && <Movies movies={movies} />}

      {numberOfPages > 1 && (
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          handlePagination={handlePagination}
        />
      )}
    </div>
  );
}
