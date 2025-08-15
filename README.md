# React Side Effects Lab

## Overview
A React app that demonstrates `useEffect` by fetching and displaying programming jokes from an API.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

3. Run tests:
   ```bash
   npm run test
   ```

## What It Does

- Fetches a programming joke when the app loads
- Shows a "Loading..." message while fetching
- Displays the joke once loaded
- Lets users click "Get a New Joke" to fetch another one
- Shows error messages if something goes wrong

## Key Files

- `src/App.jsx` - Main component with state management and API calls
- `src/components/JokeDisplay.jsx` - Shows jokes, loading, and error states
- `src/components/FetchButton.jsx` - Button to fetch new jokes
- `src/__tests__/App.test.jsx` - Tests for the app functionality

## Learning Goals

- Use `useEffect` for side effects (API calls)
- Handle loading and error states
- Make HTTP requests with `fetch()`
- Test components with async behavior

## API Used

- **JokeAPI**: `https://v2.jokeapi.dev/joke/Programming?type=single`
- Returns programming jokes in JSON format

## Commands

```bash
npm run dev          # Start development server
npm run test         # Run tests
npm run build        # Build for production
```

That's it! The app demonstrates basic React side effects with a simple joke fetcher.