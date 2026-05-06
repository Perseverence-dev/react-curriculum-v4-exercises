// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0); //0

  function handleAdd() {
    //count++; // This mutates the state directly, which is not recommended in React
    setCount((previousCount) => previousCount + 1); // State updated using the previous value in REACT
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
// DO NOT change the state variable directly (count++), as it can lead to unexpected behavior.
// Instead, use the setCount function to update the state based on the previous value. This ensures that React can properly manage the state and re-render the component when necessary.
