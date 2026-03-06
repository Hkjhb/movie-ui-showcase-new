import Link from 'next/link';
import { genres, movies } from '@/data/movies';

export default function GenresPage() {
  return (
    <section className="container fade-in" style={{ paddingTop: '1.5rem' }}>
      <h1>Browse Genres</h1>
      <p style={{ color: 'var(--muted)' }}>Find movies by your favorite categories.</p>
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
        {genres.map((genre) => {
          const count = movies.filter((movie) => movie.genre === genre).length;
          return (
            <div key={genre} className="card" style={{ padding: '1rem' }}>
              <h3 style={{ marginTop: 0 }}>{genre}</h3>
              <p style={{ color: 'var(--muted)' }}>{count} titles available</p>
              <Link href="/movies" className="btn btn-secondary">View in catalog</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
