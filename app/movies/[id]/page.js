import { notFound } from 'next/navigation';
import CastCard from '@/components/CastCard';
import MovieCard from '@/components/MovieCard';
import ReviewCard from '@/components/ReviewCard';
import StarRating from '@/components/StarRating';
import { movies } from '@/data/movies';

export default function MovieDetailPage({ params }) {
  const movie = movies.find((item) => item.id === params.id);
  if (!movie) notFound();

  const similar = movies.filter((item) => item.genre === movie.genre && item.id !== movie.id).slice(0, 4);

  return (
    <div className="fade-in">
      <section style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(10,10,10,.95)), url(${movie.backdrop})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container" style={{ padding: '3rem 0' }}>
          <h1>{movie.title}</h1>
          <p style={{ color: '#d0d0d0', maxWidth: 800 }}>{movie.overview}</p>
          <p style={{ color: 'var(--muted)' }}>{movie.year} • {movie.genre} • {movie.runtime} • Dir. {movie.director}</p>
          <StarRating rating={movie.rating} />
        </div>
      </section>

      <section className="container" style={{ paddingTop: '1.2rem' }}>
        <h2 className="section-title">Cast</h2>
        <div className="grid">{movie.cast.map((name) => <CastCard key={name} name={name} />)}</div>

        <h2 className="section-title">Trailer</h2>
        <div style={{ position: 'relative', paddingTop: '56.25%', borderRadius: 10, overflow: 'hidden' }}>
          <iframe src={movie.trailer} title={`${movie.title} Trailer`} allowFullScreen style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />
        </div>

        <h2 className="section-title">Reviews</h2>
        <div className="grid">{movie.reviews.map((review) => <ReviewCard key={review} review={review} />)}</div>

        <h2 className="section-title">Similar Movies</h2>
        <div className="grid">{similar.map((item) => <MovieCard key={item.id} movie={item} />)}</div>
      </section>
    </div>
  );
}
