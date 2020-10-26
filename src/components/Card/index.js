import React from 'react';
import './style.css';

const Card = ({ title, description, ...rest }) => {
  return (
    <div className="card" {...rest}>
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
  