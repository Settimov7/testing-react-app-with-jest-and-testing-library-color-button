import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to Midnight Blue'});

  expect(colorButtonElement).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  fireEvent.click(colorButtonElement);

  expect(colorButtonElement).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  
  expect(colorButtonElement.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to Midnight Blue'});

  expect(colorButtonElement).toBeEnabled();

  const checkBoxElement = screen.getByRole('checkbox');

  expect(checkBoxElement).not.toBeChecked();
});

test('button is disabled when checkbox is checked and enabled when check is not checked', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  const checkBoxElement = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toBeDisabled();
  expect(checkBoxElement).toBeChecked();

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();
});


test('Disabled button has gray color and reverts to Medium Violet Red', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  const checkBoxElement = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toBeEnabled({ backgroundColor: 'MediumVioletRed' });
});

test('Clicked disabled button has gray color and reverts to Midnight Blue', () => {
  render(<App />);

  const colorButtonElement = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  const checkBoxElement = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(colorButtonElement);
  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkBoxElement);

  expect(colorButtonElement).toBeEnabled({ backgroundColor: 'MidnightBlue' });
});


describe('replaceCamelWithSpaces', () => {
  test('works for no inner capital letters', () => {
    const expectedResult = 'Red';
    const text = 'Red';

    const result = replaceCamelWithSpaces(text);

    expect(result).toBe(expectedResult);
  });

  test('works for one inner capital letter', () => {
    const expectedResult = 'Midnight Blue';
    const text = 'MidnightBlue';

    const result = replaceCamelWithSpaces(text);

    expect(result).toBe(expectedResult);
  });

  test('works for multiple inner capital letters', () => {
    const expectedResult = 'Medium Violet Red';
    const text = 'MediumVioletRed';

    const result = replaceCamelWithSpaces(text);

    expect(result).toBe(expectedResult);
  });
});