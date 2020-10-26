import React from 'react';
import './style.css';

const CardDetail = ({ movie }) => {
  const { title, description, producer, release_date, rt_score } = movie;
  return (
    <div className="cardDetail">
      <h1 className="cardDetail__title">{title}</h1>
      <p className="cardDetail__description">{description}</p>
      <p className="cardDetail__section">
        <span>Producer:</span>
        {producer}
      </p>
      <p className="cardDetail__section">
        <span>Release Date:</span>
        {release_date}
      </p>
      <p className="cardDetail__section">
        <span>Rotten Tomatoes Score:</span>
        {rt_score}
      </p>
    </div>
  );
};

export default CardDetail;
