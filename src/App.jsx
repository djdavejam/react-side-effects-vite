import React, { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

function App() {
  // State variables for joke, loading, and error
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch a programming joke from the API
  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      const data = await response.json();
      setJoke(data.joke);
      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Sorry, failed to fetch a joke. Please try again.');
      setLoading(false);
    }
  };

  // useEffect to fetch initial joke when component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} error={error} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  );
}

export default App;