import React from 'react';

const FetchButton = ({ fetchJoke }) => {
  const handleClick = () => {
    fetchJoke();
  };

  return (
    <button className="fetch-button" onClick={handleClick}>
      Get a New Joke
    </button>
  );
};

export default FetchButton;