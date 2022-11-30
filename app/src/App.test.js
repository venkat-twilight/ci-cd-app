import { render, screen } from '@testing-library/react';
import App from './App';

test('renders active link', () => {
  render(<App />);
  const linkElement = screen.getByText(/active/i);
  expect(linkElement).toBeInTheDocument();
});
