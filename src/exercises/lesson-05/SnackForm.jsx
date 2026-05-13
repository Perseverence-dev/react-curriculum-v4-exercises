import { useEffect, useState } from 'react';
import styles from './SnackForm.module.css';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);

  // Form state for the controlled inputs.
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');

  // Track whether each field has been touched to determine when to show validation errors.
  const [touched, setTouched] = useState({
    name: false,
    rating: false,
  });

  useEffect(() => {
    // When editing an existing snack, populate the form fields with its data.
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(String(editingSnack.rating));
    } else {
      setName('');
      setRating('');
    }

    /// Reset touched state whenever we switch between editing and adding to avoid showing stale validation errors.
    setTouched({
      name: false,
      rating: false,
    });
  }, [editingSnack]);

  function validateName() {
    // Name must not be empty or just whitespace.
    return name.trim() !== '';
  }

  function validateRating() {
    /// Rating must be a number between 1 and 5.
    const numericRating = Number(rating);
    return rating !== '' && numericRating >= 1 && numericRating <= 5;
  }

  function getNameError() {
    if (touched.name && !validateName()) {
      return 'Snack name is required';
    }
    return '';
  }

  function getRatingError() {
    if (touched.rating && !validateRating()) {
      return 'Please enter a rating from 1 to 5';
    }
    return '';
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isNameValid = validateName();
    const isRatingValid = validateRating();

    // If either field is invalid, mark them as touched to show errors and prevent submission.
    if (!isNameValid || !isRatingValid) {
      setTouched({
        name: true,
        rating: true,
      });
      return;
    }

    // If we're editing, call updateSnack with the existing snack's ID. Otherwise, call addSnack to create a new one.
    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);

      // Clear the form after adding a new snack.
      setName('');
      setRating('');
      setTouched({
        name: false,
        rating: false,
      });
    }
  }

  const nameError = getNameError();
  const ratingError = getRatingError();

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']} htmlFor="snack-name">
          Name:
        </label>
        <input
          id="snack-name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() =>
            setTouched((prev) => ({
              ...prev,
              name: true,
            }))
          }
          className={`${styles['field-input']} ${
            nameError
              ? styles['input-error']
              : touched.name && validateName()
                ? styles['input-valid']
                : ''
          }`}
          placeholder="Enter snack name"
        />
        {nameError && <div className={styles.error}>{nameError}</div>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']} htmlFor="snack-rating">
          Rating:
        </label>
        <input
          id="snack-rating"
          type="number"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() =>
            setTouched((prev) => ({
              ...prev,
              rating: true,
            }))
          }
          min="1"
          max="5"
          className={`${styles['field-input']} ${
            ratingError
              ? styles['input-error']
              : touched.rating && validateRating()
                ? styles['input-valid']
                : ''
          }`}
          placeholder="Rate 1-5"
        />
        {ratingError && <div className={styles.error}>{ratingError}</div>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
