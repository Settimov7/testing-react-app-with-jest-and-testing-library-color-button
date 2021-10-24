import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(text) {
  return text.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [isDisabled, setIsDisabled] = useState(false);

  const newButtonColor =
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  const backgroundColor = isDisabled ? "gray" : buttonColor;
  const newButtonColorText = replaceCamelWithSpaces(newButtonColor);

  return (
    <>
      <button
        disabled={isDisabled}
        style={{ backgroundColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColorText}
      </button>

      <label>
        Disable button
        <input
          type="checkbox"
          onChange={(event) => setIsDisabled(event.target.checked)}
        />
      </label>
    </>
  );
}

export default App;
