import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieTypes } from 'store/movies';
import './style.css';
import GhibliLogo from 'assets/images/logo.png';
import Card from 'components/Card';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import CardDetail from 'components/CardDetail';

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedMovie, setMovie] = useState(null);
  console.log("HomePage -> selectedMovie", selectedMovie)
  const dispatch = useDispatch();
  const { loaded, movies } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch({ type: MovieTypes.ALL_MOVIES });
  }, [dispatch]);

  const openMovie = (id) => {
    return () => {
      const foundMovie = movies.find((m) => m.id === id);
      setMovie(foundMovie);
      setOpen(foundMovie !== null);
    };
  };

  return (
    <div>
      <div className="logo">
        <img src={GhibliLogo} alt="Ghibli Studio" />
      </div>
      {isOpen && (
        <Modal
          isOpen
          onClose={() => {
            setOpen(false);
          }}
          renderContent={() => <CardDetail movie={selectedMovie} />}
        />
      )}
      <div className="container">
        {!loaded ? (
          <Loader />
        ) : (
          movies.map((movie, key) => (
            <Card key={key} title={movie.title} description={movie.description} onClick={openMovie(movie.id)} />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
