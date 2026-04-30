export default SnackList;

function SnackList() {
  const snacks = [
    { name: 'Sprout chaat', rank: 1 },
    { name: 'Baked Crunchy Broccoli', rank: 3 },
    { name: 'Hummus with Carrots', rank: 4 },
    { name: 'Roasted peanuts', rank: 5 },
    { name: 'Avocado toast', rank: 2 },
  ];
  const sortedSnacks = snacks.sort((a, b) => a.rank - b.rank);
  return (
    <ol>
      {sortedSnacks.map((snack, index) => (
        <li key={snack.name}>
          {snack.name} (Rank: {snack.rank})
        </li>
      ))}
    </ol>
  );
}
