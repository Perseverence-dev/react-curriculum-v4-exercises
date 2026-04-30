//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((previousCount) => previousCount + 1);
  }, []); // The empty dependency array means this effect will only run once after the initial render, preventing the infinite loop.

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
// The useEffect hook is being called on every render, which causes an infinite loop of updates.
// We should not update the state inside the useEffect without a proper condition.
// We can control the state using a dependency array so it only runs when a specific value changes. (ex: [ ], or [count])
// We can use a different approach to update the count, such as using a button to increment it or using a different effect that does not depend on count.
// Output shows Bug Count : 2 , instead of 1 because the useEffect is running twice, once after the initial render and once after the state update.
// This is happening becasue main.jsx is wrapped in React.StrictMode, which intentionally double-invokes certain lifecycle methods and effects in development mode to help identify potential issues.
