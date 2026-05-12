export default function Child(onIncrement) {
  return (
    <button type="button" onClick={onIncrement}>
      Increment Counter
    </button>
  );
}

// Explanation:
// The Child component does not own the counter state.
// Instead, it receives a callback prop from Parent and invokes it when the
// button is clicked. This is the standard React pattern for child-to-parent
// communication.
