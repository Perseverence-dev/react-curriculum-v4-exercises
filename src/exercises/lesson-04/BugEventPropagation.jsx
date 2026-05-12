// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    event.stopPropagation(); // Stop the event from bubbling up to the parent div
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <p>Clicking the button should not trigger the red box alert.</p>
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Explanation:
// React click events bubble from the deepest element upward.
// Without stopPropagation(), clicking the button also triggers the parent div's click handler.
// Calling event.stopPropagation() keeps the button click isolated.
