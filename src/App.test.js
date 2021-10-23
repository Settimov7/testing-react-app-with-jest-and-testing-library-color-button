import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to blue'});

  expect(colorButtonElement).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(colorButtonElement);

  expect(colorButtonElement).toHaveStyle({ backgroundColor: 'blue' });
  
  expect(colorButtonElement.textContent).toBe('Change to red');
});
