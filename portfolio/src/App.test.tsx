import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero section', () => {
  render(<App />);
  const heroElement = screen.getByText(/Frontend Developer/i);
  expect(heroElement).toBeInTheDocument();
});
