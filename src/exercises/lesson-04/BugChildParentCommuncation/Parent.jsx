import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// Explanation:
// Parent owns the state because it renders the counter value.
// Child updates that state by calling the callback function passed through props.
// This keeps React's data flow predictable: state lives in Parent, actions can be triggered from Child.
