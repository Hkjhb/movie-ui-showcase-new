import Link from 'next/link';

export default function HeroBanner({ movie }) {
  return (
    <section style={{
      minHeight: '52vh',
      backgroundImage: `linear-gradient(rgba(10,10,10,.45), rgba(10,10,10,.9)), url(${movie.backdrop})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      <div className="container" style={{ padding: '4rem 0' }}>
        <p style={{ color: 'var(--gold)' }}>Featured</p>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', margin: 0 }}>{movie.title}</h1>
        <p style={{ maxWidth: 650, color: '#ddd' }}>{movie.overview}</p>
        <Link href={`/movies/${movie.id}`} className="btn btn-primary">Watch Details</Link>
      </div>
    </section>
  );
}
