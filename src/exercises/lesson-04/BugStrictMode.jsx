// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // StrictMode is causing the useEffect to run twice, once after the initial render and once after the state update, which is why we see the count incrementing twice instead of just once. To fix this, we can remove the StrictMode wrapper in main.jsx or adjust our useEffect to only run once by providing an empty dependency array.

    const intervalId = window.setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []); // The empty dependency array means this effect will only run once after the initial render, preventing the infinite loop.

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// This bug happens because StrictMode intentionally runs effects more than once in development to expose unsafe side effects.
// The fix is to return a cleanup function from useEffect so the old interval is cleared before the effect runs again.
// Using the functional state update also ensures we always increment from the latest value.
