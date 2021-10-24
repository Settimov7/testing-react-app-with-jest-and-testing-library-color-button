import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <>
      <button
        disabled={isDisabled}
        style={{backgroundColor: buttonColor}} 
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>

      <label>
        Disable button
        <input type="checkbox" onChange={(event) => setIsDisabled(event.target.checked)}/>
      </label>
    </>
  );
}

export default App;
