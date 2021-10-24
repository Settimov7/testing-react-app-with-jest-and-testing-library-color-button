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

test('initial conditions', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to blue'});

  expect(colorButtonElement).toBeEnabled();

  const checkBoxElement = screen.getByRole('checkbox');

  expect(checkBoxElement).not.toBeChecked();
});

test('button is disabled when checkbox is checked and enabled when check is not checked', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to blue'});
  const checkBoxElement = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toBeDisabled();
  expect(checkBoxElement).toBeChecked();

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();
});


test('Disabled button has gray color and reverts to red', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to blue'});
  const checkBoxElement = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toBeEnabled({ backgroundColor: 'red' });
});

test('Clicked disabled button has gray color and reverts to blue', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to blue'});
  const checkBoxElement = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(colorButtonElement);
  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toBeEnabled({ backgroundColor: 'blue' });
});
