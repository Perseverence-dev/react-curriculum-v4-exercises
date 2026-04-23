//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Yamuna';
  const age = 25;
  const hobbies = ['Coding', 'Reading', 'Dreaming big'];

  return (
    <div>
      <h1>About Me:</h1>
      <p>
        My name is {name} and I am {age} years old.
      </p>
      <h2>My Hobbies are:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
