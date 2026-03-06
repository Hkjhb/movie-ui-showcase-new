import MovieCard from './MovieCard';

export default function MovieRow({ title, movies }) {
  return (
    <section className="container fade-in">
      <h2 className="section-title">{title}</h2>
      <div style={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: '180px', overflowX: 'auto', gap: '1rem', paddingBottom: '1rem' }}>
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}
