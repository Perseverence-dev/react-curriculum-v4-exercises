// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';
export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0); // ← correct implementation using useState

  function handleClick() {
    setClickCount((prevCount) => prevCount + 1); // ← correct implementation using setState to trigger a re-render and update the UI
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// Explanation:
// useState is the correct hook here because the click counter is rendered on the page. React only updates the UI when state changes.
// useRef is useful for storing a value without causing a re-render, but that would not work for a visible counter.
