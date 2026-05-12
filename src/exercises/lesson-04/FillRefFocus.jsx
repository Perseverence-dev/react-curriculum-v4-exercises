// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  const inputRef = useRef(null); // Create a ref to hold the input element

  function focusInput() {
    inputRef.current?.focus(); // Use the ref to focus the input element
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput} type="button">
        Focus Input
      </button>
    </div>
  );
}

// Explanation:
// useRef gives us access to the actual input element in the DOM.
// When the button is clicked, we call focus() on that input so the user can immediately start typing without clicking into the field manually.
