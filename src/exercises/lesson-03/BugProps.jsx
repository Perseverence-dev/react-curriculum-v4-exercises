// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/
import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  //let message = 'Hello, ' + name;

  const [message, setMessage] = useState('Hello, ' + name);

  /*
  function handleChange() {
    message = 'Hi, ' + name + '!';
  }
  */

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// (Write your explanation here)
// Here message is a normal variable. When we change it, React does not know that it has changed, so it does not re-render the component.
// To fix this, I have imported the useState hook from React. Now I can use it to create a state variable for message.
// When we update the state variable using the setMessage function, React will re-render the component and display the updated message.
