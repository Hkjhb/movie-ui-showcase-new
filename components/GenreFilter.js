export default function GenreFilter({ genres, selected, onChange }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', margin: '1rem 0' }}>
      <button className={`btn ${selected === 'All' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => onChange('All')}>All</button>
      {genres.map((genre) => (
        <button key={genre} className={`btn ${selected === genre ? 'btn-primary' : 'btn-secondary'}`} onClick={() => onChange(genre)}>{genre}</button>
      ))}
    </div>
  );
}
