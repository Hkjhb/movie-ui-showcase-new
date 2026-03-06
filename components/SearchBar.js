export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: '100%', maxWidth: 360, padding: '.65rem .8rem', borderRadius: 8, border: '1px solid #2a2a2a', background: '#111', color: 'white' }}
    />
  );
}
