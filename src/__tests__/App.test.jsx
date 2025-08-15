import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import App from '../App';

// Mock fetch globally
global.fetch = vi.fn();

beforeEach(() => {
  // Mock fetch to return a test joke
  global.fetch.mockResolvedValue({
    json: () => Promise.resolve({ joke: 'Why do programmers prefer dark mode? Because light attracts bugs!' }),
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test('App component > displays a loading message before joke is loaded', async () => {
  render(<App />);

  // Ensure "Loading..." appears first
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

  // Wait for the joke to replace "Loading..."
  await waitFor(() => {
    expect(
      screen.getByText(/Why do programmers prefer dark mode?/i)
    ).toBeInTheDocument();
  });
});

test('App component > fetches and displays a joke on load', async () => {
  render(<App />);

  // Ensure the joke appears after fetching
  await waitFor(() => {
    expect(
      screen.getByText(/Why do programmers prefer dark mode?/i)
    ).toBeInTheDocument();
  });
});

test('App component > fetches a new joke when button is clicked', async () => {
  render(<App />);

  // Wait for initial joke to appear
  await waitFor(() => {
    expect(
      screen.getByText(/Why do programmers prefer dark mode?/i)
    ).toBeInTheDocument();
  });

  // Clear the existing mock and set up new mock for button click
  global.fetch.mockClear();
  global.fetch.mockResolvedValue({
    json: () => Promise.resolve({ joke: 'Another programming joke!' }),
  });

  // Click the "Get a New Joke" button
  const button = screen.getByText(/Get a New Joke/i);
  fireEvent.click(button);

  // Check if fetch was called after button click
  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalled();
  });

  // Wait for the new joke to appear
  await waitFor(() => {
    expect(screen.getByText(/Another programming joke!/i)).toBeInTheDocument();
  }, { timeout: 3000 });
});