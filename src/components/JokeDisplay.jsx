import React from 'react';

const JokeDisplay = ({ joke, loading, error }) => {
  return (
    <div className="joke-container">
      {loading && <p>Loading...</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      {!loading && !error && joke && <p>{joke}</p>}
    </div>
  );
};

export default JokeDisplay;